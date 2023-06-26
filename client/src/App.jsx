import { Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoutes";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import AuthContext from "./context/AuthContext";
import VendorsPage from "./pages/VendorsPage";
import { useContext } from "react";

export default function App() {
  let { user } = useContext(AuthContext);
  return (
    <Routes>
      {/*<Route path="/" element={
        !user ? <Navigate to="/login" /> : <HomePage />
      } />*/}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
      <Route path="/sign_up" element={!user ? <SignupPage /> : <Navigate to="/" />} />
      <Route path="/vendors" element={<VendorsPage/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
