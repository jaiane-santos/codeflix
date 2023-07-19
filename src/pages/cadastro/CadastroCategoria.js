import React from "react";
import { Link } from "react-router-dom";
import TemplateBase from "../../components/TemplateBase";

function CadastroCategoria() {
  return (
    <>
      <TemplateBase>
        <h1>Cadastro de Categoria</h1>
        <Link to="/">Home</Link>
      </TemplateBase>
    </>
  );
}

export default CadastroCategoria;
