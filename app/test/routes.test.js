import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import Login from "../src/components/login/Login";
import Register from "../src/components/register/Register";
import { TestWrapper } from "./testWrapper";

jest.mock("../src/components/modals/AvisoDePrivacidadeModal");
jest.mock("../src/components/modals/TermoDeUsoModal");

describe("Teste de componentes", () => {

  it("Register renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <Register />
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Login renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <Login />
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
