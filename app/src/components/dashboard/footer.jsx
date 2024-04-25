import React from "react";

import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

// Estilo para o componente Footer
const StyledFooter = styled.div`
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 100;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  position: relative;
  /* Estilize o link dentro do footer se necessário */
  a {
    color: white;
    text-decoration: none;
  }
`;

const Footer = () => {
  const theme = useTheme();

  return (
    <StyledFooter style={{ backgroundColor: theme.palette.background.dark, borderTop: theme.palette.border.layout, transition: "1s" }}>
      <a>Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome</a>
    </StyledFooter>
  );
};

export default Footer;
