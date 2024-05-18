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
      "Analisar Parceiro Pendente (HU003)": "/listar_parceiros_pendentes/analisar_parceiro_pendente",
      "Visualizar Parceiro Pendente (HU004)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente",
      "Visualizar Informações Complementares (HU128)": "/listar_parceiros_pendentes/visualizar_informacoes_complementares",
      "Analisar Informações Complementares (HU129)": "/listar_parceiros_pendentes/analisar_informacoes_complementares",
      "Listar pessoas interessadas (HU008)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas",
      "Currículo (HU009)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas/curriculo",
      "Listar interessados no curso (HU012)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/listar_pessoas_interessadas",
      "Visualizar curso (HU013)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/visualizar_curso",
    },
  },
];

export default adminNavConfig;
