import { beforeEach, describe, expect, test } from "vitest";
import QuoteCar from "../../components/QuoteCar";
import { render, screen } from "@testing-library/react";

describe("QuoteCar", () => {
  beforeEach(() => {
    render(
      <QuoteCar brand="Chevrolet" name="Spark" year="2023" value="1000" />
    );
  });

  test("Should render QuoteCar with props correctly", () => {
    expect(screen.getByText(/Vehiculo a cotizar/i)).toBeDefined();
    expect(screen.getByText(/Chevrolet/i)).toBeDefined();
    expect(screen.getByText(/Spark/i)).toBeDefined();
    expect(screen.getByText(/2023/i)).toBeDefined();
    expect(screen.getByText(/1,000/i)).toBeDefined();
  });
});
