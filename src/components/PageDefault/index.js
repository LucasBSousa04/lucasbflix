import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

// O Main define o conteúdo principal da página
const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%; 
  padding-right: 5%;
`;

function PageDefault(props) {
  return (
  // Ao invés de div, usa-se o <> vazio para evitar excesso de divs inutilizadas
  // <div>
    <>
      {/* similar: */}
      {/* <React.Fragment></React.Fragment> */}
      <Menu />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  // </div>
  );
}

export default PageDefault;
