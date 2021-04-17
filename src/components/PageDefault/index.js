import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
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
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
  // Ao invés de div, usa-se o <> vazio para evitar excesso de divs inutilizadas
  // <div>
    <>
      {/* similar: */}
      {/* <React.Fragment></React.Fragment> */}
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  // </div>
  );
}

PageDefault.defaultProps = {
  children: '',
  paddingAll: null,
};

PageDefault.propTypes = {
  children: propTypes.string,
  paddingAll: propTypes.number,
};
export default PageDefault;
