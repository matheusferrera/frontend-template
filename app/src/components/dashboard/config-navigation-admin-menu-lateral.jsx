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
      "Visualizar Parceiro Pendente (HU004)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente",
      "Analisar Parceiro Pendente (HU003)": "/listar_parceiros_pendentes/analisar_parceiro_pendente",
      "Visualizar Informações Complementares (HU128)": "/listar_parceiros_pendentes/visualizar_informacoes_complementares",
      "Analisar Informações Complementares (HU129)": "/listar_parceiros_pendentes/analisar_informacoes_complementares",
      "Visualizar Pessoas Interessadas (HU008)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/listar_pessoas_interessadas",
    },
  },
];

export default adminNavConfig;
