import React from "react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";
import axios from "axios";

import PageAnalisarInformacoesComplementares from "../src/pages/admin/PageAnalisarInformacoesComplementares";
import PageAnalisarParceiroPendente from "../src/pages/admin/PageAnalisarParceiroPendente";
import PageComponents from "../src/pages/admin/PageComponents";
import PageHomeAdm from "../src/pages/admin/PageHomeAdmin";
import PageParceirosAprovados from "../src/pages/admin/PageListarParceirosAprovados";
import PageParceirosPendentes from "../src/pages/admin/PageListarParceirosPendentes";
import PageParceirosReprovados from "../src/pages/admin/PageListarParceirosReprovados";
import PageVisualizarParceiroPendente from "../src/pages/admin/PageVisualizarParceiroPendente";
import { TestWrapper } from "./testWrapper";

// import PageVisualizarInformacoesComplementares from "../src/pages/admin/PageVisualizarInformacoesComplementares";
// import PageCursosPessoasInteressadas from "../src/pages/admin/PageCursosPessoasInteressadas";
// import PageCursosVisualizar from "../src/pages/admin/PageCursosVisualizar";
// import PageVagasCurriculo from "../src/pages/admin/PageVagasCurriculo";
// import PageVagasPessoasInteressadas from "../src/pages/admin/PageVagasPessoasInteressadas";

describe("Teste de componentes", () => {
  it("Página de administrador renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageHomeAdm />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - listar parceiros pendentes renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageParceirosPendentes />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - analisar parceiro renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageAnalisarParceiroPendente />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - visualizar parceiro pendente renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageVisualizarParceiroPendente />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - analisar informacoes complementares renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageAnalisarInformacoesComplementares />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  // it("Admin - visualizar informacoes complementares renderizada corretamente", async () => {
  //   axios.get = jest.fn().mockResolvedValue({});

  //   let component;

  //   await act(async () => {
  //     component = renderer.create(
  //       <TestWrapper>
  //         <PageVisualizarInformacoesComplementares />
  //       </TestWrapper>,
  //     );
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   jest.resetAllMocks();
  // });

  // it("Admin - vagas - listar pessoas interessadas renderizada corretamente", async () => {
  //   axios.get = jest.fn().mockResolvedValue({});

  //   let component;

  //   await act(async () => {
  //     component = renderer.create(
  //       <TestWrapper>
  //         <PageVagasPessoasInteressadas />
  //       </TestWrapper>,
  //     );
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   jest.resetAllMocks();
  // });

  // it("Admin - vagas  - listar pessoas interessadas - curriculo renderizada corretamente", async () => {
  //   axios.get = jest.fn().mockResolvedValue({});

  //   let component;

  //   await act(async () => {
  //     component = renderer.create(
  //       <TestWrapper>
  //         <PageVagasCurriculo />
  //       </TestWrapper>,
  //     );
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   jest.resetAllMocks();
  // });

  // it("Admin - visualizar_parceiro_pendente - cursos - visualizar curso renderizada corretamente", async () => {
  //   axios.get = jest.fn().mockResolvedValue({});

  //   let component;

  //   await act(async () => {
  //     component = renderer.create(
  //       <TestWrapper>
  //         <PageCursosVisualizar />
  //       </TestWrapper>,
  //     );
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   jest.resetAllMocks();
  // });

  // it("Admin - visualizar_parceiro_pendente - cursos - listar pessoas interessadas renderizada corretamente", async () => {
  //   axios.get = jest.fn().mockResolvedValue({});

  //   let component;

  //   await act(async () => {
  //     component = renderer.create(
  //       <TestWrapper>
  //         <PageCursosPessoasInteressadas />
  //       </TestWrapper>,
  //     );
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  //   jest.resetAllMocks();
  // });

  it("Admin - listar parceiros aprovados renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageParceirosAprovados />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - listar parceiros reprovados renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageParceirosReprovados />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });

  it("Admin - componentes renderizada corretamente", async () => {
    axios.get = jest.fn().mockResolvedValue({});

    let component;

    await act(async () => {
      component = renderer.create(
        <TestWrapper>
          <PageComponents />
        </TestWrapper>,
      );
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });
});
