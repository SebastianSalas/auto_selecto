import { beforeEach, describe, expect, test } from "vitest";
import Navbar from "../../components/Navbar";
import { screen } from "@testing-library/react";
import { contextRender } from "../../utils/test-utils";

describe("Navigation Bar", () => {
  beforeEach(() => {
    contextRender(<Navbar />);
  });

  test("Should render Navbar", () => {
    expect(screen.getByText(/Contacto/i)).toBeDefined();
  });
});
