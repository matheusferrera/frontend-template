import React from "react";

import styled from "styled-components";

// Estilo para o componente Footer
const StyledFooter = styled.div`
  width: 100%;
  background-color: #071d41;
  height: 40px;
  font-size: 16px;
  font-weight: 100;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Estilize o link dentro do footer se necessário */
  a {
    color: white;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a>Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome</a>
    </StyledFooter>
  );
};

export default Footer;
