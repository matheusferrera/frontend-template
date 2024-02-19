/* eslint-disable no-undef */
import { loginMockData, registerMockData, userMockData } from "../test/mockData";

// Cria um objeto simulado que atua como uma versão personalizada do Axios
const customAxios = {
  mockLogin: jest.fn().mockResolvedValue(loginMockData),
  mockRegister: jest.fn().mockResolvedValue(registerMockData),
  mockUser: jest.fn().mockResolvedValue(userMockData),
  mockDate: jest.fn().mockResolvedValue(new Date()),
};

export default customAxios;
