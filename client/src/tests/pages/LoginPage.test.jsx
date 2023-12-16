import { beforeEach, describe, expect, test } from "vitest";
import LoginPage from "../../pages/LoginPage";
import { screen } from "@testing-library/react";
import { contextRender } from "../../utils/test-utils";

describe("Login Page", () => {
  beforeEach(() => {
    contextRender(<LoginPage />);
  });

  test("Should render LoginPage", () => {
    expect(screen.getByText(/Iniciar sesión/i)).toBeDefined();
  });
});
