import { beforeEach, describe, expect, test } from "vitest";
import HomePage from "../../pages/HomePage";
import { screen } from "@testing-library/react";
import { routerRender } from "../../utils/test-utils";

describe("Home Page", () => {
  beforeEach(() => {
    routerRender(<HomePage />);
  });

  test("Should render HomePage", () => {
    expect(screen.getByText(/Bienvenido a AUTO SELECTO/i)).toBeDefined();
  });
});
