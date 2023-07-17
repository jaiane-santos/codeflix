import React from "react";
import { FooterBase } from "./styles";
import logo from "../../assets/codeflix-logo.png";

function Footer() {
  return (
    <FooterBase>
      <img src={logo} alt="Logo Alura" height={"40px"} />
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
