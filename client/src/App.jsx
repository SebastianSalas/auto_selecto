import { Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
//import Layout from "./hocs/Layout";


 /*
*/
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/sign_up" element={<SignupPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  )
}