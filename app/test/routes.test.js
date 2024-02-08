import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import NotFound from "../src/components/NotFound";
import Register from "../src/components/Register";
import { AuthProvider } from "../src/contexts/AuthContext";
import { DataProvider } from "../src/contexts/DataContext";
import { NavContentProvider } from "../src/contexts/NavContentContext";
import ThemeProvider from "../src/theme";

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
      <Router>
        <AuthProvider>
          <DataProvider>
            <NavContentProvider>
              <ThemeProvider>
                <Register />
              </ThemeProvider>
            </NavContentProvider>
          </DataProvider>
        </AuthProvider>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Login renderizada corretamente", () => {
    const component = renderer.create(
      <Router>
        <AuthProvider>
          <DataProvider>
            <NavContentProvider>
              <ThemeProvider>
                <Login />
              </ThemeProvider>
            </NavContentProvider>
          </DataProvider>
        </AuthProvider>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
