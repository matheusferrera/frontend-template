import React from "react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";
import axios from "axios";

import PageHomeParceiro from "../src/pages/parceiro/PageHomeParceiro";
import PageNovaInscricaoParceiro from "../src/pages/parceiro/PageNovaInscricaoParceiro";
import { singleMockData } from "./mockData";
import { TestWrapper } from "./testWrapper";

// jest.mock("axios");
jest.mock("../src/contexts/AuthContext.js");

describe("Teste de componentes", () => {
  it("Página de Parceiro renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageHomeParceiro />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Página ListarParceiros renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue(singleMockData);

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageNovaInscricaoParceiro />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
