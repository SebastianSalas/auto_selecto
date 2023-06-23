import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoutes";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

export default function App() {
  let {user} = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/" element={
        !user ? <Navigate to="/login" /> : <HomePage />
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign_up" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
