import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import NotFound from "../src/components/NotFound";
import Register from "../src/components/Register";
import ThemeProvider from "../src/theme";
import { TestWrapper } from "./testWrapper";

jest.mock("../src/components/AvisoDePrivacidadeModal");
jest.mock("../src/components/TermoDeUsoModal");

describe("Teste de componentes", () => {
  it("Home renderizada corretamente", () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Not found renderizada corretamente", () => {
    const component = renderer.create(<NotFound />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Register renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <ThemeProvider>
          <Register />
        </ThemeProvider>
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Login renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <ThemeProvider>
          <Login />
        </ThemeProvider>
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
