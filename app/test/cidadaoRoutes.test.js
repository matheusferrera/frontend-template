import React from "react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";
import axios from "axios";

import PageHomeCidadao from "../src/pages/cidadao/PageHomeCidadao";
import { TestWrapper } from "./testWrapper";

describe("Teste de componentes", () => {
  it("Página de Cidadão renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageHomeCidadao />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });
});
