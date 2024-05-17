const adminNavConfig = [
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
    title: "Menu Temporário",
    path: "/",
    color: "default",
    subTitles: {
      componentes: "/components",
      "Analisar Parceiro Pendente": "/listar_parceiros_pendentes/analisar_parceiro_pendente",
      "Visualizar Informações Complementares": "/listar_parceiros_pendentes/visualizar_informacoes_complementares",
      "Analisar Informações Complementares": "/listar_parceiros_pendentes/analisar_informacoes_complementares",
    },
  },
];

export default adminNavConfig;
