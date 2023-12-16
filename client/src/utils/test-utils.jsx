import AuthContext from "../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

let contextData = {
  user: "TestUser",
  loginUser: undefined,
};

export const contextRender = (ui, options) => {
  const AllTheProviders = ({ children }) => {
    return (
      <BrowserRouter>
        <AuthContext.Provider value={{ contextData }}>
          {children}
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

export const routerRender = (ui, options) => {
  return render(ui, { wrapper: BrowserRouter, ...options });
};
