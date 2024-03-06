import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import Administrador from "../src/components/administrador/Administrador";
import Cidadao from "../src/components/cidadao/Cidadao";
import FAQ from "../src/components/FAQ";
import Parceiro from "../src/components/parceiro/Parceiro";
import { TestWrapper } from "./testWrapper";

jest.mock("../src/assets/images/Ilustra-Admin.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cidadao.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cursos.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Emprego.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Parceiro.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image001.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image003.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image005.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image010.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image013.png", () => "<div>Imagem</div>");
jest.mock("../src/contexts/AuthContext.js");

describe("Teste de componentes", () => {
  it("Página de administrador renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <Administrador />
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Cidadão renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <Cidadao />
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Parceiro renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <Parceiro />
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Página de FAQ", () => {
    const component = renderer.create(
      <TestWrapper>
        <FAQ />
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
