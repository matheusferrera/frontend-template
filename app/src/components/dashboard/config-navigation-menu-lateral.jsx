export const defaultNavConfig = [
  {
    title: "Página Inicial",
    path: "/",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
    },
  },
];

export const adminNavConfig = [
  {
    title: "Página Inicial",
    path: "/admin",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
      "Listar Parceiros Pendentes": "/listar_parceiros_pendentes",
    },
  },
  {
    title: "DEV",
    path: "/",
    color: "default",
    subTitles: {
      componentes: "/components",
    },
  },
];

export const parceiroNavConfig = [
  {
    title: "Página Inicial",
    path: "/parceiro",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
    },
  },
  {
    title: "parceiro",
    path: "/parceiro",
    subTitles: {
      "Nova Inscrição de Parceiro": "/parceiro/cadastro",
      "Visualizar Parceiro": "/parceiro/visualizar",
    },
  },
];

export const cidadaoNavConfig = [
  {
    title: "Página Inicial",
    path: "/cidadao",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
    },
  },
];
