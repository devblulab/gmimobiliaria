import React, { useState } from 'react';
import Cabecalho from '../../components/template/Cabecalho';
import AvisoPost from '../../components/avisos/AvisoPost';
import AvisoList from '../../components/avisos/AvisoList';
import { Aviso } from '../../components/avisos/Aviso';

const AvisosPage: React.FC = () => {
  const [avisos, setAvisos] = useState<Aviso[]>([]);

  const addAviso = (avisos: Aviso): void => {
    setAvisos((prevAvisos) => [...prevAvisos, avisos]);
  };

  return (
    <>
      
        <Cabecalho />
        <AvisoPost setAvisos={addAviso} />
        <AvisoList avisos={avisos} />
      
    </>
  );
};

export default AvisosPage;
