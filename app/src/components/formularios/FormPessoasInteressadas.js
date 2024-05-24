import React, { useRef, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Card, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";

import Tabela from "../table/DefaultTable";
import { dadosPessoas, tabelaVagas } from "./dadosMockados";

// Dados fictícios para teste da tabela
const initialData = dadosPessoas;

// Retornar a pesquisa vazia
const initialFilterState = {
  criteriosDaVaga: "none",
  pcd: "none",
};

const FormPessoasInteressadas = () => {
  const [filter, setFilter] = useState(initialFilterState);
  const [filteredData, setFilteredData] = useState(initialData);
  const vagaID = JSON.parse(localStorage.getItem("vagaID"));
  const vaga = tabelaVagas.filter(vaga => vaga.id == vagaID)[0];

  const tipoDeVaga = "<Tipo de vaga>";
  const nomeDaVaga = vaga.nome;
  const quantidade = vaga.quantidade;

  const handleFilterSelectChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: typeof value === "string" ? value.split(",") : value });
  };

  const applyFilter = () => {
    const filtered = initialData.filter(parceiro => {
      const matchesTextFilter =
        (filter.criteriosDaVaga == "none" || parceiro.criteriosDaVaga == filter.criteriosDaVaga) &&
        (filter.pcd == "none" || parceiro.pcd == filter.pcd);

      return matchesTextFilter;
    });
    setFilteredData(filtered);
  };

  const resetFilter = () => {
    setFilter(initialFilterState);
    applyFilter();
  };

  const tableRef = useRef();

  return (
    <>
      <Stack spacing={1}>
        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          {/* Campos para filtrar */}
          <Grid
            container
            mb={2}
          >
            <Grid
              item
              xs={12}
            >
              <Typography variant="subtitle2">
                Currículos encontrados para a vaga {tipoDeVaga} {nomeDaVaga}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography variant="subtitle2">Quantidade de currículos com o Perfil: {quantidade}</Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={6}
            >
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="label-tipo-servico">Atendem aos critérios da vaga</InputLabel>
                <Select
                  id="criteriosDaVaga"
                  name="criteriosDaVaga"
                  value={filter.criteriosDaVaga || "none"}
                  type="text"
                  onChange={handleFilterSelectChange}
                  labelId="label-tipo-servico"
                >
                  <MenuItem
                    value="none"
                    disabled
                  >
                    {" "}
                    Selecione uma opção{" "}
                  </MenuItem>
                  <MenuItem value={"Sim"}>Sim</MenuItem>
                  <MenuItem value={"Não"}>Não</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={6}
            >
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="label-tipo-servico">É PCD</InputLabel>
                <Select
                  id="pcd"
                  name="pcd"
                  value={filter.pcd || "none"}
                  type="text"
                  onChange={handleFilterSelectChange}
                  labelId="label-tipo-servico"
                >
                  <MenuItem
                    value="none"
                    disabled
                  >
                    {" "}
                    Selecione uma opção{" "}
                  </MenuItem>
                  <MenuItem value={"Sim"}>Sim</MenuItem>
                  <MenuItem value={"Não"}>Não</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Botões de pesquisa/cancelar */}
          <Box sx={{ flexGrow: 1, mt: "16px" }}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
            >
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={resetFilter}
                  sx={{ gap: "8px" }}
                  style={{ fontFamily: "Rawline Medium" }}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={applyFilter}
                  sx={{ gap: "8px" }}
                  style={{ fontFamily: "Rawline Medium" }}
                >
                  <SearchIcon />
                  Pesquisar
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Tabela */}
          <Box
            sx={{ flexGrow: 1, mt: "40px" }}
            ref={tableRef}
          >
            <Tabela
              columns={[
                { headerName: "Situação", field: "status" },
                { headerName: "PCD", field: "pcd" },
                { headerName: "E-mail", field: "email" },
              ]}
              rows={filteredData}
              hiddenRows={filteredData.map(() => ({ Curriculo: "Texto1", Requisitos: "Texto2" }))}
              actionButtons={[
                {
                  title: "Visualizar",
                  href: "listar-pessoas-interessadas/curriculo",
                  storageID: "pessoaID",
                  icon: "visibility",
                },
              ]}
              sx={{ mt: "16px" }}
            />
          </Box>
        </Card>
      </Stack>
    </>
  );
};

export default FormPessoasInteressadas;
