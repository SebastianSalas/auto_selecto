import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
//import Layout from "./hocs/Layout.jsx";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <ToastContainer />
      <Navbar />
      <App />
    </AuthProvider>
  </BrowserRouter>
);
