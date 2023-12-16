import { beforeEach, describe, expect, test } from "vitest";
import QuoteCar from "../../components/QuoteCar";
import { render, screen } from "@testing-library/react";

describe("QuoteCar", () => {
  beforeEach(() => {
    render(<QuoteCar />);
  });

  test("Should render QuoteCar", () => {
    expect(screen.getByText(/Vehiculo a cotizar/i)).toBeDefined();
  });
});
