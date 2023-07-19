import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import CadastroVideo from "./pages/cadastro/CadastroVideo";
import CadastroCategoria from "./pages/cadastro/CadastroCategoria";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
