import React from 'react';
// É importado o módulo Link para criar o comportamento SPA
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink/ButtonLink';
import './Menu.css';

function Menu(props) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Lucasbflix logo" className="Logo" />
      </Link>
      {/* O button as="a" permite usar uma tag HTML (nesse caso, button) como outra (nesse caso, a) */}
      {/* Porém, com o button as={Link}, podemos usar o link como comportamento SPA */}
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
      {/* Aqui, usando o modelo padrão sem o styled-components (sobretudo usando props) */}
      {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
    </nav>
  );
}

export default Menu;
