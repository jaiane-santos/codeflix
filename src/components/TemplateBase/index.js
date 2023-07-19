import React from "react";
import Menu from "../Menu";
import Footer from "../Footer/Footer";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function TemplateBase({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default TemplateBase;
