export const registerMockData = {
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
};

export const loginMockData = {
  data: {
    results: {
      email: "teste@email.com",
      password: "123456",
    },
  },
};

export const userMockData = {
  user: {
    id: 1,
    name: "Felipe Moura",
    email: "felipems97@hotmail.com",
    created_at: "2024-01-24T18:03:31.000000Z",
    updated_at: "2024-01-24T18:03:31.000000Z",
    username: "felipems999",
    photo_path: null,
    dh_criacao: "2024-01-24T18:03:31.000000Z",
  },
};

export const singleMockData = {
  data: [
    {
      key: "AC",
      sigla: "AC",
      nome: "Acre",
      id: 1,
      descricao: "Atuação 1",
    },
    {
      key: "AL",
      sigla: "AL",
      nome: "Alagoas",
      id: 2,
      descricao: "Atuação 2",
    },
  ],
};
