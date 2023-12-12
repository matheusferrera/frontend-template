import jest from "@jest/globals";

import { loginMockData } from "../mockData";

// Cria um objeto simulado que atua como uma versão personalizada do Axios
const customAxios = {
  get: jest.fn().mockResolvedValue(loginMockData),
};

export default customAxios;
