import React from "react";
import { render } from "@testing-library/react";
import QuoteCar from "./QuoteCar";

test("renders QuoteCar component", () => {
  const { getByText } = render(
    <QuoteCar brand="Toyota" name="Camry" year="2020" value="30000" />
  );
  const marcaText = getByText(/Marca: /i);
  const modeloText = getByText(/Modelo: /i);
  const anioText = getByText(/Año: /i);
  const precioText = getByText(/Precio: /i);

  expect(marcaText).toBeInTheDocument();
  expect(modeloText).toBeInTheDocument();
  expect(anioText).toBeInTheDocument();
  expect(precioText).toBeInTheDocument();
});
