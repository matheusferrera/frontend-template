import React from "react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";

import Register from "../src/components/register/Register";
import { registerMockData } from "./mockData";
import { TestWrapper } from "./testWrapper";

jest.mock("../src/components/modals/AvisoDePrivacidadeModal");
jest.mock("../src/components/modals/TermoDeUsoModal");

describe("Teste de registro", () => {
  it("Register renderizada corretamente", () => {
    const component = renderer.create(
      <TestWrapper>
        <Register />
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Teste de registro usando mock", async () => {
    render(
      <TestWrapper>
        <Register />
      </TestWrapper>,
    );

    const emailInput = screen.getByLabelText("Email");
    const nameInput = screen.getByLabelText("Nome");
    const passwordInput = screen.getByLabelText("Senha");
    const confirmPasswordInput = screen.getByLabelText("Confirmação de Senha");
    const submitButton = screen.getByText("Registrar");

    // Preencha os campos do formulário
    fireEvent.change(emailInput, { target: { value: "testuser" } });
    fireEvent.change(nameInput, { target: { value: "testname" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "testpassword" } });

    // Envie o formulário
    fireEvent.click(submitButton);

    // Aguarde até que a chamada à API seja concluída
    await act(async () => {
      await axios.mockRegister(registerMockData); // Simula uma chamada à API usando a função `get` do Axios
      expect(axios.mockRegister).toHaveBeenCalledWith({
        data: {
          results: [
            {
              email: "test@email.com",
              name: "Teste",
              username: "teste",
              password: "123456",
            },
          ],
        },
      }); // Verifica se axios.get foi chamado com a URL correta
    });
    expect(axios.mockRegister).toHaveBeenCalledTimes(1); // Verifica se a função `get` do Axios foi chamada uma vez durante o teste
  });
});
