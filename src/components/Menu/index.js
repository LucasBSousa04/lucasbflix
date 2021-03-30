import React from 'react';
import Logo from '../../assets/img/Logo.png'
import Button from '../Button';
import ButtonLink from './components/ButtonLink/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} alt="Lucasbflix logo" className="Logo" />
            </a>
            {/* O button as="a" permite usar uma classe css (nesse caso, button) como outra (nesse caso, a) */}
            <Button as="a"   className="ButtonLink" href="/">
                Novo vídeo 
            </Button>
        </nav>
    )
}

export default Menu;