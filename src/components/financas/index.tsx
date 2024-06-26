import React, { useContext, useState } from "react";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";

import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import useTransacao, { TipoExibicao } from "@/data/hooks/useTransacao";
import servicos from "@/logic/core";
import Id from "@/logic/core/comum/Id";
import Transacao, { transacaoVazia } from "@/logic/core/financas/Transacao";
import transacoesFalsas from "@/data/constants/transacoesFalsas";

import Cabecalho from "../template/Cabecalho";
import CampoMesAno from "../template/CampoMesAno";
import Conteudo from "../template/Conteudo";
import NaoEncontrado from "../template/NaoEncontrado";
import Pagina from "../template/Pagina";
import Formulario from "./Formulario";
import Grade from "./Grade";
import Lista from "./Lista";
import Sumario from "./Sumario";



export default function Financas() {
 
  const {
    data,
    alterarData,
    alterarExibicao,
    tipoExibicao,
    transacoes,
    transacao,
    selecionar,
    salvar,
    excluir,
  } = useTransacao();
  
  

  function renderizarControles() {
  return (
    <div className="flex flex-col mb-1"> {/* Adicione a classe flex-col para dispor os itens em coluna */}
      <CampoMesAno data={data} dataMudou={alterarData} />
      <Button
        className="bg-cyan-900 mt-5" // Adicione a classe mt-2 para adicionar uma margem superior
        
        leftIcon={<IconPlus />}
        onClick={() => selecionar(transacaoVazia)}
      >
        Nova transação
      </Button>
      <SegmentedControl
        
        data={[
          { label: <IconList />, value: "lista" },
          { label: <IconLayoutGrid />, value: "grade" },
        ]}
        onChange={(tipo) => alterarExibicao(tipo as TipoExibicao)}
      />
    </div>
    );
  }

  function renderizarTransacoes() {
    const props = { transacoes, selecionarTransacao: selecionar };
    return tipoExibicao === "lista" ? <Lista {...props} /> : <Grade {...props} />;
  }

  return (
    <Pagina>
      <Cabecalho />
      <Conteudo className="gap-5 justify-between">
        <Sumario transacoes={transacoes} />
        {renderizarControles()}
        {transacao ? (
          <Formulario
            transacao={transacao}
            salvar={salvar}
            excluir={excluir}
            cancelar={() => selecionar(null)}
          />
        ) : transacoes.length ? (
          renderizarTransacoes()
        ) : (
          <NaoEncontrado>Nenhuma transação encontrada</NaoEncontrado>
        )}


      </Conteudo>
    </Pagina>
  );
}
