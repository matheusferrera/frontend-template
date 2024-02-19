import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import Administrador from "../src/components/administrador/Administrador";
import Cidadao from "../src/components/cidadao/Cidadao";
import Parceiro from "../src/components/parceiro/Parceiro";
import ThemeProvider from "../src/theme";
import { TestWrapper } from "./testWrapper";

jest.mock("../src/assets/images/Ilustra-Admin.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cidadao.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cursos.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Emprego.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Parceiro.png", () => "<div>Imagem</div>");
jest.mock("../src/components/cards/CardVisaoGeral.js");
jest.mock("../src/contexts/AuthContext.js");

describe("Teste de componentes", () => {
  it("Página de administrador renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <ThemeProvider>
          <Administrador />
        </ThemeProvider>
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Cidadão renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <ThemeProvider>
          <Cidadao />
        </ThemeProvider>
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Parceiro renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <ThemeProvider>
          <Parceiro />
        </ThemeProvider>
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
