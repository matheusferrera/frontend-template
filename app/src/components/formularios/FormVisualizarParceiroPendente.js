import React, { useEffect, useState } from "react";

import { Button, Card, FormGroup, Grid, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import DefaultTable from "../table/DefaultTable";
import { dadosParceirosPendentes, tabelaVagas } from "./dadosMockados";

// Primeira Tabela
const tabelaRepresentantesColunas = [
  { field: "nome", headerName: "Nome" },
  { field: "cpf", headerName: "CPF" },
  { field: "email", headerName: "Email" },
];

const tabelaRepresentantesLinhas = [
  { id: 1, nome: "Luke Skywalker", cpf: "123.456.789-00", email: "luke@starwars.com" },
  { id: 2, nome: "Leia Organa", cpf: "987.654.321-00", email: "leia@starwars.com" },
  { id: 3, nome: "Han Solo", cpf: "555.666.777-00", email: "han@starwars.com" },
];

// Segunda Tabela
const tabelaVagasColunas = [
  { field: "nome", headerName: "Nome" },
  { field: "quantidade", headerName: "Quantidade" },
  { field: "descricao", headerName: "Descrição" },
];

const tabelaVagasLinhas = tabelaVagas;

const tabelaVagasHiddenLinhas = tabelaVagasLinhas.map(({ salario, dataCadastro, vigencia }) => ({
  salario,
  dataCadastro,
  vigencia,
}));

const getTabelaVagasActions = () => [
  {
    title: "Visualizar dados da vaga",
    href: "",
    icon: "visibility",
  },

  {
    title: "Visualizar a relação de pessoas interessadas na vaga",
    href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas",
    storageID: "vagaID",
    icon: "person",
  },
];

// Terceira Tabela
const tabelaCursosColunas = [
  { field: "nome", headerName: "Nome" },
  { field: "inicioPreMatricula", headerName: "Início Pré-Matrícula" },
  { field: "fimPreMatricula", headerName: "Fim Pré-Matrícula" },
];

const tabelaCursosLinhas = [
  {
    id: 1,
    nome: "Curso de Programação Web",
    inicioPreMatricula: "2024-06-01",
    fimPreMatricula: "2024-06-15",
    vagas: 30,
    interessados: 45,
    situacao: "Em andamento",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Curso de Data Science",
    inicioPreMatricula: "2024-07-01",
    fimPreMatricula: "2024-07-15",
    vagas: 25,
    interessados: 40,
    situacao: "Pendente",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Curso de Design Gráfico",
    inicioPreMatricula: "2024-08-01",
    fimPreMatricula: "2024-08-15",
    vagas: 20,
    interessados: 30,
    situacao: "Concluído",
    status: "Inativo",
  },
];

const tabelaCursosHiddenLinhas = tabelaCursosLinhas.map(({ vagas, interessados, situacao, status }) => ({
  vagas,
  interessados,
  situacao,
  status,
}));

const getTabelaCursosActions = () => [
  {
    title: "Visualizar dados do curso",
    href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/visualizar-curso",
    icon: "visibility",
  },
  {
    title: "Visualizar a relação de pessoas interessadas no curso",
    href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/listar-pessoas-interessadas",
    icon: "person",
  },
  {
    title: "Visualizar a decisão do curso",
    href: "",
    icon: "list",
  },
];

// Quarta Tabela
const tabelaPublicoMobilizadoColunas = [
  { field: "nome", headerName: "Nome", width: 250 },
  { field: "cnpj", headerName: "CNPJ", width: 200 },
  { field: "nomeResponsavel", headerName: "Nome do Responsável", width: 250 },
];

const tabelaPublicoMobilizadoLinhas = [
  {
    id: 1,
    nome: "Empresa Alpha",
    cnpj: "12.345.678/0001-99",
    nomeResponsavel: "Ana Silva",
    uf: "SP",
    cidade: "São Paulo",
    vagasCadastradas: 10,
    candidatosInteressados: 50,
    curriculosCadastrados: 40,
    pessoasInteressadasEmCurso: 20,
  },
  {
    id: 2,
    nome: "Empresa Beta",
    cnpj: "98.765.432/0001-88",
    nomeResponsavel: "Bruno Souza",
    uf: "RJ",
    cidade: "Rio de Janeiro",
    vagasCadastradas: 8,
    candidatosInteressados: 30,
    curriculosCadastrados: 25,
    pessoasInteressadasEmCurso: 15,
  },
  {
    id: 3,
    nome: "Empresa Gamma",
    cnpj: "23.456.789/0001-77",
    nomeResponsavel: "Carla Pereira",
    uf: "MG",
    cidade: "Belo Horizonte",
    vagasCadastradas: 12,
    candidatosInteressados: 40,
    curriculosCadastrados: 35,
    pessoasInteressadasEmCurso: 18,
  },
];

const tabelaPublicoMobilizadoHiddenLinhas = tabelaPublicoMobilizadoLinhas.map(
  ({ uf, cidade, vagasCadastradas, candidatosInteressados, curriculosCadastrados, pessoasInteressadasEmCurso }) => ({
    uf,
    cidade,
    vagasCadastradas,
    candidatosInteressados,
    curriculosCadastrados,
    pessoasInteressadasEmCurso,
  }),
);

const FormVisualizarParceiroPendente = () => {
  const initialData = dadosParceirosPendentes;
  const parceiroID = JSON.parse(localStorage.getItem("analisarID"));
  const [valores, setValores] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (parceiroID) {
      const parceiroEncontrado = initialData.find(parceiro => parceiro.id === parceiroID);

      if (parceiroEncontrado) {
        const servicos = Object.keys(parceiroEncontrado.tipoDeServico).filter(servico => parceiroEncontrado.tipoDeServico[servico]);

        setValores({
          ...parceiroEncontrado,
          tipoDeServico: servicos,
          dataCadastro: dayjs(parceiroEncontrado.dataCadastro),
          dataUltimaModificacao: dayjs(parceiroEncontrado.dataUltimaModificacao),
        });
      }
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!valores) {
    return <div>Parceiro não encontrado</div>;
  }

  return (
    <Stack spacing={2}>
      <Card
        color="#ffffff"
        sx={{
          borderRadius: "8px",
          padding: "16px",
          mt: "24px",
        }}
      >
        <Grid
          spacing={1}
          container
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="nomeResponsavel"
                name="nomeResponsavel"
                label="Nome"
                placeholder="Nome"
                value={valores.nomeResponsavel}
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="cnpj"
                name="cnpj"
                label="CNPJ"
                placeholder="CNPJ"
                value={valores.cnpj}
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          spacing={1}
          container
          marginTop={1}
        >
          <Grid
            item
            xs={6}
            sm={4}
          >
            <FormGroup>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  id="dataCadastro"
                  name="dataCadastro"
                  label="Data do cadastro"
                  value={valores.dataCadastro}
                  format="DD/MM/YYYY"
                  disabled
                />
              </LocalizationProvider>
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
            <FormGroup>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Ultima Modificação"
                  id="dataUltimaModificacao"
                  name="dataUltimaModificacao"
                  value={valores.dataUltimaModificacao}
                  format="DD/MM/YYYY"
                  disabled
                />
              </LocalizationProvider>
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
            <FormGroup>
              <TextField
                id="status"
                name="status"
                label="Situação"
                placeholder="Situação"
                value={valores.status}
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          spacing={1}
          container
          marginTop={1}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="nomePontoFocal"
                name="nomePontoFocal"
                label="Ponto focal"
                placeholder="Ponto focal"
                value={valores.nomePontoFocal}
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="emailPontoFocal"
                name="emailPontoFocal"
                label="Email do ponto focal"
                placeholder="Email do ponto  focal"
                value={valores.emailPontoFocal}
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          mt={2}
          sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "24px" }}
          style={{ transition: "1s" }}
        >
          Dados dos reprentantes
        </Typography>

        <DefaultTable
          columns={tabelaRepresentantesColunas}
          rows={tabelaRepresentantesLinhas}
        ></DefaultTable>
      </Card>

      <Card
        color="#ffffff"
        sx={{
          borderRadius: "8px",
          padding: "16px",
          mt: "24px",
        }}
      >
        <Typography
          variant="h4"
          mt={2}
          sx={{ fontFamily: "Rawline Bold", marginBottom: "10px" }}
          style={{ transition: "1s" }}
        >
          Serviço(s) ofertado(s) pelo parceiro (emprego, curso, mobilização de público, mobilização de parceiro, estágio, voluntariado)
        </Typography>

        <Typography
          variant="h5"
          mt={2}
          sx={{ fontFamily: "Rawline Bold", marginBottom: "10px" }}
          style={{ transition: "1s" }}
        >
          Vagas cadastradas
        </Typography>

        <DefaultTable
          columns={tabelaVagasColunas}
          rows={tabelaVagasLinhas}
          hiddenRows={tabelaVagasHiddenLinhas}
          actionButtons={getTabelaVagasActions()}
        ></DefaultTable>

        <Typography
          variant="h5"
          mt={2}
          sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "40px" }}
          style={{ transition: "1s" }}
        >
          Cursos Ofertados
        </Typography>

        <DefaultTable
          columns={tabelaCursosColunas}
          rows={tabelaCursosLinhas}
          hiddenRows={tabelaCursosHiddenLinhas}
          actionButtons={getTabelaCursosActions()}
        ></DefaultTable>
      </Card>

      <Card
        color="#ffffff"
        sx={{
          borderRadius: "8px",
          padding: "16px",
          mt: "24px",
        }}
      >
        <Typography
          variant="h5"
          mt={2}
          sx={{ fontFamily: "Rawline Bold", marginBottom: "10px" }}
          style={{ transition: "1s" }}
        >
          Dados de público mobilizado
        </Typography>

        <Grid
          spacing={1}
          container
          mb={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="quantidadeCurriculos"
                name="quantidadeCurriculos"
                label="Quantidade de Currículos Inseridos"
                placeholder="Quantidade de Currículos Inseridos"
                value="100"
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <FormGroup>
              <TextField
                id="quantidadeUsuarios"
                name="quantidadeUsuarios"
                label="Quantidade de Usuários Encontrados Interessados em Cursos"
                placeholder="Quantidade de Usuários Encontrados Interessados em Cursos"
                value="200"
                type="text"
                disabled
              />
            </FormGroup>
          </Grid>
        </Grid>

        <DefaultTable
          columns={tabelaPublicoMobilizadoColunas}
          rows={tabelaPublicoMobilizadoLinhas}
          hiddenRows={tabelaPublicoMobilizadoHiddenLinhas}
        ></DefaultTable>
      </Card>

      <Grid container>
        <Grid
          item
          xs={8.5}
        ></Grid>
        <Grid
          item
          xs={2}
        >
          <Button
            variant="outlined"
            href="/listar-parceiros-pendentes"
          >
            <Typography variant={"BUTTON TEXT"}> CANCELAR </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FormVisualizarParceiroPendente;
