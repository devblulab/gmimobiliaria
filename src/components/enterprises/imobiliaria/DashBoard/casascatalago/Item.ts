interface Item {
  id: string;
  cliente: string;
  total: number;
  
  nome: string;
  mesa: string;
  status: string;
  unidadevalor: number;
  concluido: boolean;
    
  tipo: string,
    
    quantidade: number;
  
    
    userId: string;
   
    
    selected: boolean;
    imagemUrls: string[];


    garagem: string,
    cozinha: string,
    banheiro: string,
    dormitorio: string,
    sala: string,


}

export default Item;
