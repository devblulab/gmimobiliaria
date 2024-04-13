import React from 'react';
import Content from '@/components/enterprises/cadastrocliente/Content';
import Cabecalho from '@/components/template/Cabecalho';
import Rodape from '@/components/inventario/Footer';

const PostPage: React.FC = () => {
  return (
    <>
   
      <Cabecalho />
      <Content />
      <Rodape />
      
    </>
  );
};

export default PostPage;