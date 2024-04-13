import {
    collection,
    deleteDoc,
    doc,
    DocumentData,
    DocumentSnapshot,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    OrderByDirection,
    query,
    QueryConstraint,
    setDoc,
    updateDoc,
    where,
    WhereFilterOp
} from 'firebase/firestore';
import { app } from '../config/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import Id from '@/logic/core/comum/Id';

export interface Filtro {
    atributo: string;
    op: WhereFilterOp;
    valor: any;
}

export default class Colecao {
    private _db;

    constructor() {
        this._db = getFirestore(app);
    }

    async salvar(
        caminho: string,
        entidade: any,
        id?: string,
        imagemFile?: File
    ): Promise<any> {
        try {
            const idFinal = id ?? entidade.id ?? Id.novo();
            const docRef = doc(this._db, caminho, idFinal);

            if (imagemFile) {
                const storageRef = ref(getStorage(app), `images/${imagemFile.name}`);
                const fileBuffer = await imagemFile.arrayBuffer();
                await uploadBytes(storageRef, fileBuffer);
                const imagemUrl = await getDownloadURL(storageRef);
                entidade.imagemUrl = imagemUrl;
            }

            await setDoc(docRef, entidade);

            return {
                ...entidade,
                id: entidade.id ?? idFinal,
            };
        } catch (error) {
            console.error('Erro ao salvar:', error);
            throw error;
        }
    }

    async atualizar(caminho: string, id: string, dados: any): Promise<void> {
        try {
            const docRef = doc(this._db, caminho, id);
            await updateDoc(docRef, dados);
        } catch (error) {
            console.error('Erro ao atualizar:', error);
            throw error;
        }
    }

    async excluir(caminho: string, id?: string): Promise<boolean> {
        try {
            if (!id) return false;
            const docRef = doc(this._db, caminho, id);
            const itemNoBanco = await getDoc(docRef);
            if (!itemNoBanco.exists()) return false;
            await deleteDoc(docRef);
            return true;
        } catch (error) {
            console.error('Erro ao excluir:', error);
            throw error;
        }
    }

    async consultar(caminho: string, ordenarPor?: string, direcao?: OrderByDirection): Promise<any[]> {
        try {
            const colecaoRef = collection(this._db, caminho);
            const ordenacao = ordenarPor ? [orderBy(ordenarPor, direcao)] : [];
            const consulta = query(colecaoRef, ...ordenacao);
            const resultado = await getDocs(consulta);
            return resultado.docs.map(this._converterDoFirebase) ?? [];
        } catch (error) {
            console.error('Erro ao consultar:', error);
            throw error;
        }
    }

    async consultarPorId(caminho: string, id: string): Promise<any> {
        try {
            if (!id) return null;
            const docRef = doc(this._db, caminho, id);
            const resultado = await getDoc(docRef);
            return this._converterDoFirebase(resultado);
        } catch (error) {
            console.error('Erro ao consultar por ID:', error);
            throw error;
        }
    }

    async consultarComFiltros(
        caminho: string,
        filtros: Filtro[],
        ordenarPor?: string,
        direcao?: OrderByDirection
    ): Promise<any[]> {
        try {
            const colecaoRef = collection(this._db, caminho);
            const filtrosWhere = filtros?.map((f) => where(f.atributo, f.op, f.valor)) ?? [];
            const ordenacao = ordenarPor ? [orderBy(ordenarPor, direcao)] : [];
            const consulta = query(colecaoRef, ...filtrosWhere, ...ordenacao);
            const resultado = await getDocs(consulta);
            return resultado.docs.map(this._converterDoFirebase) ?? [];
        } catch (error) {
            console.error('Erro ao consultar com filtros:', error);
            throw error;
        }
    }

    private _converterDoFirebase(snapshot: DocumentSnapshot<DocumentData>) {
        try {
            if (!snapshot.exists()) return null;
            const entidade: any = { ...snapshot.data(), id: snapshot.id };
            if (!entidade) return entidade;
            return Object.keys(entidade).reduce((obj: any, atributo: string) => {
                const valor: any = entidade[atributo];
                return { ...obj, [atributo]: valor.toDate?.() ?? valor };
            }, {});
        } catch (error) {
            console.error('Erro ao converter do Firebase:', error);
            throw error;
        }
    }
}
