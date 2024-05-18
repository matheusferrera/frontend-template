import React from "react";
import { Route, Routes } from "react-router-dom";

import PageAnalisarInformacoesComplementares from "../../pages/admin/PageAnalisarInformacoesComplementares";
import PageAnalisarParceiroPendente from "../../pages/admin/PageAnalisarParceiroPendente";
import PageComponents from "../../pages/admin/PageComponents";
import PageCursosPessoasInteressadas from "../../pages/admin/PageCursosPessoasInteressadas";
import PageCursosVisualizar from "../../pages/admin/PageCursosVisualizar";
import PageHomeAdm from "../../pages/admin/PageHomeAdmin";
import PageParceirosPendentes from "../../pages/admin/PageListarParceirosPendentes";
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
      path="/listar_parceiros_pendentes"
      element={<PageParceirosPendentes />}
    />
    <Route
      path="/listar_parceiros_pendentes/analisar_parceiro_pendente"
      element={<PageAnalisarParceiroPendente />}
    />
    <Route
      path="/listar_parceiros_pendentes/visualizar_parceiro_pendente"
      element={<PageVisualizarParceiroPendente />}
    />
    <Route
      path="/listar_parceiros_pendentes/analisar_informacoes_complementares"
      element={<PageAnalisarInformacoesComplementares />}
    />
    <Route
      path="/listar_parceiros_pendentes/visualizar_informacoes_complementares"
      element={<PageVisualizarInformacoesComplementares />}
    />
    {/* Vagas de Trabalho */}
    <Route
      path="/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas"
      element={<PageVagasPessoasInteressadas />}
    />
    <Route
      path="/listar_parceiros_pendentes/visualizar_parceiro_pendente/vagas/listar_pessoas_interessadas/curriculo"
      element={<PageVagasCurriculo />}
    />
    {/* Cursos */}
    <Route
      path="/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/visualizar_curso"
      element={<PageCursosVisualizar />}
    />
    <Route
      path="/listar_parceiros_pendentes/visualizar_parceiro_pendente/cursos/listar_pessoas_interessadas"
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
