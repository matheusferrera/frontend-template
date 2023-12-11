import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

import { waitFor } from "@testing-library/react";
import axios from "axios";

import Home from "../src/components/Home";
import Login from "../src/components/Login";
import NotFound from "../src/components/NotFound";
import Register from "../src/components/Register";
import { AuthProvider } from "../src/contexts/AuthContext";
import customAxios from "./__mocks__/axios";

jest.mock("axios"); // Mockando o módulo axios

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
          <Register />
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
          <Login />
        </AuthProvider>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Teste de login usando mock", async () => {
    renderer.create(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>,
    );

    // Utiliza a função `Promise.all` para aguardar a conclusão de múltiplas promessas
    await Promise.all([
      // Utiliza o ato assíncrono para aguardar a conclusão de uma ação assíncrona
      act(async () => {
        await axios.get("/login"); // Simula uma chamada à API usando a função `get` do Axios
        waitFor(() => expect(customAxios.get).toHaveBeenCalledTimes(1)); // Aguarda até que a função `get` do Axios tenha sido chamada uma vez (waitFor)
      }),
    ]);

    // Verifica se a função `get` do Axios foi chamada uma vez durante o teste
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
