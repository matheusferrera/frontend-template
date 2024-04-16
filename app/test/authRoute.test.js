import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import FAQ from "../src/components/FAQ";
import PageHomeAdm from "../src/pages/admin/home.admin";
import PageHomeCidadao from "../src/pages/cidadao/home.cidadao";
import PageHomeParceiro from "../src/pages/parceiro/home.parceiros";
import { TestWrapper } from "./testWrapper";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}))

jest.mock("../src/assets/images/Ilustra-Admin.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cidadao.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Cursos.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Emprego.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/Ilustra-Parceiro.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/servico1.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/servico2.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image001.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image003.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image005.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image010.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/image013.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/cidadaoHome.png", () => "<div>Imagem</div>");
jest.mock("../src/assets/images/parceiroHome2.png", () => "<div>Imagem</div>");
jest.mock("../src/contexts/AuthContext.js");

describe("Teste de componentes", () => {
  it("Página de administrador renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <PageHomeAdm />
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Cidadão renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <PageHomeCidadao />
      </TestWrapper>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de Parceiro renderizada corretamente", async () => {
    const component = renderer.create(
      <TestWrapper>
        <PageHomeParceiro />
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
