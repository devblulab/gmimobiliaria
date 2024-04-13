import Usuario from "@/logic/core/usuario/Usuario";
import {
    Auth,
    getAuth,
    GoogleAuthProvider,
    onIdTokenChanged,
    signInWithPopup,
    signOut,
    User
} from "firebase/auth";
import { app } from "../config/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Colecao, { Filtro } from "../db/Colecao";
import Id from '@/logic/core/comum/Id';

export type MonitorarUsuario = (usuario: Usuario | null) => void;
export type CancelarMonitoramento = () => void;

export default class Autenticacao {
    private _auth: Auth;
    private _colecao: Colecao;

    constructor() {
        this._auth = getAuth(app);
        this._colecao = new Colecao();
    }

    async loginGoogle(): Promise<Usuario | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider());
        return this.converterParaUsuario(resp.user);
    }

    logout(): Promise<void> {
        return signOut(this._auth);
    }

    monitorar(notificar: MonitorarUsuario): CancelarMonitoramento {
        return onIdTokenChanged(this._auth, async (usuarioFirebase) => {
            const usuario = this.converterParaUsuario(usuarioFirebase);
            notificar(usuario);
        });
    }

    obterUsuarioLogado(): Usuario | null {
        const usuarioFirebase = this._auth.currentUser;
        return this.converterParaUsuario(usuarioFirebase);
    }

    async adicionarItemComImagem(caminhoColecao: string, item: any, imagemFile: File): Promise<any> {
        try {
            const usuarioLogado = this.obterUsuarioLogado();

            if (usuarioLogado) {
                const imagemUrl = await this.uploadImagem(imagemFile);
                const itemSalvo = await this._colecao.salvar(caminhoColecao, {
                    ...item,
                    userId: usuarioLogado.id,
                    imagemUrl: imagemUrl,
                });

                return {
                    ...itemSalvo,
                    id: itemSalvo.id ?? Id.novo(),
                };
            }

            return null;
        } catch (error) {
            console.error('Erro ao adicionar o item com imagem:', error);
            throw error;
        }
    }

    private async uploadImagem(imagemFile: File): Promise<string> {
        const storageRef = ref(getStorage(app), `images/${imagemFile.name}`);
        const fileBuffer = await imagemFile.arrayBuffer();
        await uploadBytes(storageRef, fileBuffer);
        return getDownloadURL(storageRef);
    }

    private converterParaUsuario(usuarioFirebase: User | null): Usuario | null {
        if (!usuarioFirebase?.email) return null;
        const nomeAlternativo = usuarioFirebase.email.split('@')[0];

        return {
            id: usuarioFirebase.uid,
            nome: usuarioFirebase.displayName ?? nomeAlternativo,
            email: usuarioFirebase.email,
            imagemUrl: usuarioFirebase.photoURL
        };
    }
}
