/* eslint-disable no-undef */
import { loginMockData, registerMockData } from "../mockData";

// Cria um objeto simulado que atua como uma versão personalizada do Axios
const customAxios = {
  mockLogin: jest.fn().mockResolvedValue(loginMockData),
  mockRegister: jest.fn().mockResolvedValue(registerMockData),
};

export default customAxios;
