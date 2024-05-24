import React, { useEffect, useState } from "react";

import { Button, Container, Typography } from "@mui/material";
import { Card, Grid } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import { dadosPessoas } from "../../components/formularios/dadosMockados";

const VagasCurriculo = () => {
  const [pessoa, setPessoa] = useState({
    nome: "<Nome da pessoa>",
    endereco: "<Endereco>",
    telefone: "<Telefone>",
    dataDeNascimento: "<Data de Nascimento>",
    estadoCivil: "<Estado Civil>",
    email: "<E-mail>",
    temCNH: "<Tem CNH>",
    tipoCNH: "<Tipo de CNH>",
    escolaridade: "<Escolaridade>",
    situacaoEscolaridade: "<Situação Ecolaridade>",
    tipoCursoTecnico: "<Tipo de Curso>",
    situacaoCursoTecnico: "<Situação>",
    nomeDaInstituicaoCursoTecnico: "<Nome da Instituição>",
    anoDeConclusaoCursoTecnico: "<Ano de Conclusão>",
    tipoCursoComplementar: "<Tipo de Curso>",
    situacaoCursoComplementar: "<Situação>",
    nomeDaInstituicaoCursoComplementar: "<Nome da Instituição>",
    anoDeConclusaoCursoComplementar: "<Ano da Conclusão>",
    funcao: "<Função>",
    dataDeAdimissao: "<Data de Adimissão>",
    dataDeDesligamento: "<Data de Desligamento>",
    relacaoDeAtividades: "<Relação de Atividades>",
    informacoesAdicionais: [
      ["Tipo", "<Descricao 1>"],
      ["Tipo", "<Descricao 2>"],
      ["Tipo", "<Descricao 3>"],
    ],
  });

  let pessoaSelecionada = null;

  useEffect(() => {
    pessoaSelecionada = dadosPessoas.filter(pessoa => pessoa.id == JSON.parse(localStorage.getItem("pessoaID")))[0];
    if (pessoaSelecionada) {
      setPessoa({ ...pessoa, ...pessoaSelecionada });
    }
  }, []);

  const infoItems = [
    { label: "Endereço:", value: pessoa.endereco },
    { label: "Telefone:", value: pessoa.telefone },
    { label: "Data de Nascimento:", value: pessoa.dataDeNascimento },
    { label: "Estado Civil:", value: pessoa.estadoCivil },
    { label: "E-mail:", value: pessoa.email },
    { label: "Possui CNH:", value: pessoa.temCNH },
    { label: "Tipo CNH:", value: pessoa.tipoCNH },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        links={[
          { href: "/listar-parceiros-pendentes", text: "Listar Parceiros Pendentes" },
          { href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente", text: "Vizualizar Parceiro Pendente" },
          {
            href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas",
            text: "Listar Pessoas Interessadas",
          },
        ]}
        currentPage="Curriculo"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Currículo
      </Typography>
      <Card
        color="#ffffff"
        sx={{
          borderRadius: "8px",
          padding: "16px",
          mt: "32px",
        }}
        style={{ transition: "1s" }}
      >
        <Grid
          container
          item
          spacing={0.1}
          sm={12}
        >
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "12px",
                mb: "16px",
                fontFamily: "Rawline Thin",
              }}
            >
              {pessoa.nome}
            </Typography>
          </Grid>

          <>
            {infoItems.map((item, index) => (
              <Grid
                item
                container
                md={12}
                sm={12}
                xs={12}
                key={index}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "12px",
                    mb: "10px",
                    fontFamily: "Rawline Bold",
                    mr: "5px",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "12px",
                    mb: "10px",
                    fontFamily: "Rawline Thin",
                  }}
                >
                  {item.value}
                </Typography>
              </Grid>
            ))}
          </>
          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "6px" }}></div>
          <Grid
            item
            container
            spacing={1}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={3}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Bold",
                  mr: "5px",
                }}
              >
                Escolaridade:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Thin",
                }}
              >
                {pessoa.escolaridade} - {pessoa.situacaoEscolaridade}
              </Typography>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            spacing={1}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={3}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Bold",
                  mr: "5px",
                }}
              >
                Cursos Técnicos:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Thin",
                }}
              >
                {pessoa.tipoCursoTecnico} - {pessoa.situacaoCursoTecnico} <br />
                Instituição - {pessoa.nomeDaInstituicaoCursoTecnico} <br />
                Ano de conclusao - {pessoa.anoDeConclusaoCursoTecnico} <br />
              </Typography>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            spacing={1}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={3.8}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Bold",
                  mr: "5px",
                }}
              >
                Cursos Complementares:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Thin",
                }}
              >
                {pessoa.tipoCursoComplementar} - {pessoa.situacaoCursoComplementar} <br />
                Instituição - {pessoa.nomeDaInstituicaoCursoComplementar} <br />
                Ano de conclusao - {pessoa.anoDeConclusaoCursoComplementar} <br />
              </Typography>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            spacing={1}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={3}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Bold",
                  mr: "5px",
                }}
              >
                Experiências:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Thin",
                }}
              >
                Função: {pessoa.funcao} <br />
                Admissão: {pessoa.dataDeAdimissao} <br />
                Desligamento: {pessoa.dataDeDesligamento} <br />
                Descrição de Atividades: {pessoa.relacaoDeAtividades} <br />
              </Typography>
            </Grid>
          </Grid>
          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            spacing={1}
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              md={3}
              sm={3}
              xs={3}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Bold",
                  mr: "5px",
                }}
              >
                Qualificação e informações adicionais:
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "12px",
                  mt: "16px",
                  fontFamily: "Rawline Thin",
                }}
              >
                {pessoa.informacoesAdicionais.map((info, index) => (
                  <Grid
                    item
                    xs={12}
                    key={index}
                  >
                    {info[0]} - {info[1]} <br />
                  </Grid>
                ))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={7}
        ></Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={() => window.history.back()}
          >
            Voltar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Enviar por E-mail</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Gerar PDF</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VagasCurriculo;
