import React, { useState } from 'react';
import ListPost from './ListPost';
import ItemList from './ItemList';





interface Item {
  id: string;
  cliente: string;
  total: number;
  status: string;
  nome: string;
  quantidade: number;
  mesa: string;
  tipo: string;
  concluido: boolean;
  userId: string;
  unidadevalor: number;
  imagemUrl: string;
  garagem: string,
  cozinha: string,
  banheiro: string,
  dormitorio: string,
  sala: string,
  
 
  

}

const Produtoset: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (newItem: Item) => {
    setItems([...items, newItem]);
  };

  return (
    <>
  
    
      <ListPost setItems={(items) => addItem} />
      <ItemList items={items} />
     
    </>
  );
};

export default Produtoset;
