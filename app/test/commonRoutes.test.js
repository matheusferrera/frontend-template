import React from "react";
import renderer from "react-test-renderer";

import { describe, expect, it, jest } from "@jest/globals";

import FAQ from "../src/pages/FAQ";
import NotFound from "../src/pages/NotFound";
import { TestWrapper } from "./testWrapper";

describe("Teste de componentes", () => {
  it("Not found renderizada corretamente", () => {
    const component = renderer.create(<NotFound />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Página de FAQ", () => {
    const component = renderer.create(
      <TestWrapper>
        <FAQ />
      </TestWrapper>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    jest.resetAllMocks();
  });
});
