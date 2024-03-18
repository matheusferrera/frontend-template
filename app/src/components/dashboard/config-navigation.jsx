const navConfig = [
  {
    title: "Página Inicial",
    path: "/parceiro",
    color: "default",
    subTitles: {
      perfil: "/profile",
    },
  },
  {
    title: "parceiro",
    path: "/parceiro",
    subTitles: {
      "listar parceiros": "/parceiro/listar_parceiros",
    },
  },
  {
    title: "Vagas de Trabalho",
    path: "/",
    subTitles: {
      "vagas parceiros": "/parceiro/listar_parceiros",
    },
  },
  {
    title: "Cursos",
    path: "/",
    subTitles: {
      "cursos diversos": "/parceiro/listar_parceiros",
    },
  },
  {
    title: "Empreendedorismo",
    path: "/",
    subTitles: {
      "tecnicas de empreendedorismo": "/parceiro/listar_parceiros",
    },
  },
];

export default navConfig;
