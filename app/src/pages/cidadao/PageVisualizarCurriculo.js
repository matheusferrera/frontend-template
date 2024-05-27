import React, { useState } from "react";

import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PrintIcon from "@mui/icons-material/Print";
import { Button, Container, FormControl, FormGroup, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Card, Grid } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import CustomModal from "../../components/modals/CustomModal";

const PageVisualizarCurriculo = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const linksBreadCrumb = [
    { href: "/", text: "Cidadão" },
    { href: "/vagas-de-trabalho", text: "Vagas de trabalho" },
  ];

  const infoItems = [
    { label: "Endereço:", value: "[endereço]" },
    { label: "Telefone:", value: "[telefone]" },
    { label: "Data de Nascimento:", value: "[data de nascimento]" },
    { label: "Estado Civil:", value: "[estado civil]" },
    { label: "Email:", value: "[email]" },
    { label: "Possui CNH:", value: "[possui CNH]" },
    { label: "Tipo CNH:", value: "[tipo CNH]" },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        currentPage="Visualizar currículo"
        links={linksBreadCrumb}
      />

      <CustomModal
        showModal={isModalOpen}
        handleClose={handleCloseModal}
        title={"Escolha o email de envio"}
        content={
          <FormGroup variant="filled">
            <FormControl variant="filled">
              <InputLabel>Email do destinatario</InputLabel>
              <Select
                id="status"
                name="status"
                value={""}
                type="text"
                onChange={""}
              >
                <MenuItem
                  value="Pendente"
                  disabled
                >
                  Selecione o email
                </MenuItem>
                <MenuItem value="Reprovar">Teste</MenuItem>
              </Select>
            </FormControl>
            <Grid
              item
              xs={2}
              mt={4}
              sx={{ alignSelf: "flex-end" }}
            >
              <Button
                variant="contained"
                onClick={""}
              >
                <Typography variant={"BUTTON TEXT"}>Encaminhar email!</Typography>
              </Button>
            </Grid>
          </FormGroup>
        }
        buttons={[]}
      />

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
      >
        Visualizar currículo
      </Typography>

      <Card
        color="#ffffff"
        sx={{ borderRadius: "8px", padding: "16px" }}
        style={{ transition: "1s" }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "20", mb: "16px", fontFamily: "Rawline Regular" }}
        >
          Mobilização de currículo
        </Typography>
        <Grid
          spacing={1}
          container
          sx={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}
        ></Grid>

        <Grid
          container
          spacing={1}
          sx={{ mt: "5px", justifyContent: "flex-end" }}
        >
          <Grid
            item
            md={1}
            sm={1}
            xs={4}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={async () => {}}
              fullWidth
            >
              <PictureAsPdfIcon />
            </Button>
          </Grid>
          <Grid
            item
            md={1}
            sm={1}
            xs={4}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={async () => {}}
              fullWidth
            >
              <PrintIcon />
            </Button>
          </Grid>
          <Grid
            item
            md={1}
            sm={1}
            xs={4}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={handleOpenModal}
              fullWidth
            >
              <MarkAsUnreadIcon />
            </Button>
          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            xs={12}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={async () => {}}
              fullWidth
            >
              EDITAR CURRÍCULO
            </Button>
          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            xs={12}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={async () => {}}
              fullWidth
            >
              PERGUNTAS FREQUENTES
            </Button>
          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            xs={12}
          >
            <Button
              size="large"
              type="submit"
              variant="outlined"
              onClick={async () => {}}
              fullWidth
            >
              VOLTAR
            </Button>
          </Grid>
        </Grid>
      </Card>

      <Card
        color="#ffffff"
        sx={{ borderRadius: "8px", padding: "16px", mt: "32px" }}
        style={{ transition: "1s" }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "20", mb: "16px", fontFamily: "Rawline Regular" }}
        >
          Mobilização de currículo
        </Typography>

        <Grid
          container
          spacing={0.1}
        >
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            mt={3}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: "12px", mb: "16px", fontFamily: "Rawline Thin" }}
            >
              [nome pessoa]
            </Typography>
          </Grid>

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
                sx={{ fontSize: "12px", mb: "10px", fontFamily: "Rawline Bold", mr: "5px" }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mb: "10px", fontFamily: "Rawline Thin" }}
              >
                {item.value}
              </Typography>
            </Grid>
          ))}

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "6px" }}></div>
          <Grid
            item
            container
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              container
              md={2}
              sm={2}
              xs={4}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Bold", mr: "5px" }}
              >
                Escolaridade:
              </Typography>
            </Grid>
            <Grid
              item
              container
              md={10}
              sm={10}
              xs={8}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Thin" }}
              >
                Escolaridade - [Situação Escolaridade]
              </Typography>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              container
              md={2}
              sm={2}
              xs={4}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Bold", mr: "5px" }}
              >
                Cursos Técnicos:
              </Typography>
            </Grid>
            <Grid
              item
              container
              md={10}
              sm={10}
              xs={8}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Thin" }}
              >
                Tipo do curso - [Situação do Curso] <br />
                Instituição - [Nome instituição] <br />
                Ano de conclusao - [Ano de conclusao] <br />
              </Typography>
            </Grid>
          </Grid>

          <div style={{ borderBottom: "1px solid grey", width: "100%", marginTop: "16px" }}></div>
          <Grid
            item
            container
            md={12}
            sm={12}
            xs={12}
          >
            <Grid
              item
              container
              md={2}
              sm={2}
              xs={4}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Bold", mr: "5px" }}
              >
                Experiências:
              </Typography>
            </Grid>
            <Grid
              item
              container
              md={10}
              sm={10}
              xs={8}
            >
              <Typography
                variant="h5"
                sx={{ fontSize: "12px", mt: "16px", fontFamily: "Rawline Thin" }}
              >
                Tipo da experiência - [Situação da experiência] <br />
                Instituição - [Nome instituição] <br />
                Ano de conclusao - [Ano de conclusao] <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default PageVisualizarCurriculo;
