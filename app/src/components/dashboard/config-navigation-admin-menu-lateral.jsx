const adminNavConfig = [
  {
    title: "Página Inicial",
    path: "/admin",
    color: "default",
    subTitles: {
      home: "/",
      perfil: "/profile",
      "Listar Parceiros Pendentes": "/listar-parceiros-pendentes",
      "Listar Parceiros Aprovados": "/listar-parceiros-aprovados",
      "Listar Parceiros Reprovados": "/listar-parceiros-reprovados",
    },
  },
  {
    title: "Menu Temporário",
    path: "/",
    color: "default",
    subTitles: {
      componentes: "/components",
      "Listar Parceiros Pendentes (HU002)": "/listar-parceiros-pendentes",
      "Analisar Parceiro Pendente (HU003, HU005, HU006, HU007)": "/listar-parceiros-pendentes/analisar-parceiro-pendente",
      "Visualizar Parceiro Pendente (HU004)": "/listar-parceiros-pendentes/visualizar-parceiro-pendente",
      "Visualizar Informações Complementares (HU129)": "/listar-parceiros-pendentes/visualizar-informacoes-complementares",
      "Analisar Informações Complementares (HU128)": "/listar-parceiros-pendentes/analisar-informacoes-complementares",
      "Listar pessoas interessadas (HU008)": "/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas",
      "Currículo (HU009)": "/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas/curriculo",
      "Listar interessados no curso (HU012)": "/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/listar-pessoas-interessadas",
      "Visualizar curso (HU013)": "/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/visualizar-curso",
      "Listar Parceiros Aprovados (HU010)": "/listar-parceiros-aprovados",
      "Listar Parceiros Reprovados (HU011)": "/listar-parceiros-reprovados",
    },
  },
];

export default adminNavConfig;
