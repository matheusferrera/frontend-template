import React from "react";
import { Route, Routes } from "react-router-dom";

import PageAnalisarInformacoesComplementares from "../../pages/admin/PageAnalisarInformacoesComplementares";
import PageAnalisarParceiroPendente from "../../pages/admin/PageAnalisarParceiroPendente";
import PageComponents from "../../pages/admin/PageComponents";
import PageCursosPessoasInteressadas from "../../pages/admin/PageCursosPessoasInteressadas";
import PageCursosVisualizar from "../../pages/admin/PageCursosVisualizar";
import PageHomeAdm from "../../pages/admin/PageHomeAdmin";
import PageParceirosAprovados from "../../pages/admin/PageListarParceirosAprovados";
import PageParceirosPendentes from "../../pages/admin/PageListarParceirosPendentes";
import PageParceirosReprovados from "../../pages/admin/PageListarParceirosReprovados";
import PageVagasCurriculo from "../../pages/admin/PageVagasCurriculo";
import PageVagasPessoasInteressadas from "../../pages/admin/PageVagasPessoasInteressadas";
import PageVisualizarInformacoesComplementares from "../../pages/admin/PageVisualizarInformacoesComplementares";
import PageVisualizarParceiroPendente from "../../pages/admin/PageVisualizarParceiroPendente";
import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";

const AdminRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeAdm />}
    />
    <Route
      path="/home"
      element={<PageHomeAdm />}
    />
    <Route
      path="/profile"
      element={<Profile />}
    />
    <Route
      path="/components"
      element={<PageComponents />}
    />
    <Route
      path="/listar-parceiros-pendentes"
      element={<PageParceirosPendentes />}
    />
    <Route
      path="/listar-parceiros-aprovados"
      element={<PageParceirosAprovados />}
    />
    <Route
      path="/listar-parceiros-reprovados"
      element={<PageParceirosReprovados />}
    />
    <Route
      path="/listar-parceiros-pendentes/analisar-parceiro-pendente"
      element={<PageAnalisarParceiroPendente />}
    />
    <Route
      path="/listar-parceiros-pendentes/visualizar-parceiro-pendente"
      element={<PageVisualizarParceiroPendente />}
    />
    <Route
      path="/listar-parceiros-pendentes/analisar-informacoes-complementares"
      element={<PageAnalisarInformacoesComplementares />}
    />
    <Route
      path="/listar-parceiros-pendentes/visualizar-informacoes-complementares"
      element={<PageVisualizarInformacoesComplementares />}
    />
    {/* Vagas de Trabalho */}
    <Route
      path="/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas"
      element={<PageVagasPessoasInteressadas />}
    />
    <Route
      path="/listar-parceiros-pendentes/visualizar-parceiro-pendente/vagas/listar-pessoas-interessadas/curriculo"
      element={<PageVagasCurriculo />}
    />
    {/* Cursos */}
    <Route
      path="/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/visualizar-curso"
      element={<PageCursosVisualizar />}
    />
    <Route
      path="/listar-parceiros-pendentes/visualizar-parceiro-pendente/cursos/listar-pessoas-interessadas"
      element={<PageCursosPessoasInteressadas />}
    />
    <Route
      path="/faq"
      element={<FAQ />}
    />
    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
);

export default AdminRoutes;
