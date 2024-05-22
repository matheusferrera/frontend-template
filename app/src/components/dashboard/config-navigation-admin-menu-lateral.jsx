const adminNavConfig = [
  {
    title: "Página Inicial",
    path: "/admin",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
      "Listar Parceiros Pendentes": "/listar_parceiros_pendentes",
      "Listar Parceiros Aprovados": "/listar_parceiros_aprovados",
      "Listar Parceiros Reprovados": "/listar_parceiros_reprovados",
    },
  },
  {
    title: "Menu Temporário",
    path: "/",
    color: "default",
    subTitles: {
      componentes: "/components",
      "Listar Parceiros Pendentes (HU002)": "/listar_parceiros_pendentes",
      "Analisar Parceiro Pendente (HU003, HU005, HU006, HU007)": "/listar_parceiros_pendentes/analisar_parceiro_pendente",
      "Visualizar Parceiro Pendente (HU004)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente",
      "Visualizar Informações Complementares (HU129)": "/listar_parceiros_pendentes/visualizar_informacoes_complementares",
      "Analisar Informações Complementares (HU128)": "/listar_parceiros_pendentes/analisar_informacoes_complementares",
      "Listar pessoas interessadas (HU008)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas",
      "Currículo (HU009)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas/curriculo",
      "Listar interessados no curso (HU012)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/listar_pessoas_interessadas",
      "Visualizar curso (HU013)": "/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/visualizar_curso",
      "Listar Parceiros Aprovados (HU010)": "/listar_parceiros_aprovados",
      "Listar Parceiros Reprovados (HU011)": "/listar_parceiros_reprovados",
    },
  },
];

export default adminNavConfig;
