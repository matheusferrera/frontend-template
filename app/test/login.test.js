import React from "react";
import { act } from "react-dom/test-utils";

import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";

import Login from "../src/components/login/Login";
import { loginMockData } from "./mockData";
import { TestWrapper } from "./testWrapper";

// jest.mock("axios"); // Mockando o módulo axios
jest.mock("../src/components/modals/AvisoDePrivacidadeModal");
jest.mock("../src/components/modals/TermoDeUsoModal");

describe("Teste de login", () => {
  it("Teste de login usando mock", async () => {
    render(
      <TestWrapper>
        <Login />
      </TestWrapper>,
    );

    const emailInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Senha");
    const submitButton = screen.getByText("Login");

    // Preencha os campos do formulário
    fireEvent.change(emailInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    // Envie o formulário
    fireEvent.click(submitButton);

    // Aguarde até que a chamada à API seja concluída
    await act(async () => {
      await axios.mockLogin(loginMockData); // Simula uma chamada à API usando a função `get` do Axios
      expect(axios.mockLogin).toHaveBeenCalledWith({
        data: {
          results: {
            email: "teste@email.com", //
            password: "123456",
          },
        },
      }); // Verifica se axios.get foi chamado com os parâmetros corretos
      expect(axios.mockLogin).toHaveBeenCalledTimes(1); // Verifica se a função `get` do Axios foi chamada uma vez durante o teste
    });
  });
});
