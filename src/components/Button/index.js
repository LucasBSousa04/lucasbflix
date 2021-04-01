// Com o styled components, dispensa-se o uso das props. 
// Elas já ficam implícitas quando se importa o componente e as aponta 
// Exemplo: import Button  
//          function TalCoisa() {
            // return( 
                // <Button classname="Botao-classe">Children do Botão</Button>      
                // )
            // }

import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
  
    &:hover,
    &:focus {
    opacity: .5;
    }
`;
// const Button = styled.(Link))`----> caso queira lançar o objeto já como Link do React-router
//     color: var(--white);
//     border: 1px solid var(--white);
//     box-sizing: border-box;
//     cursor: pointer;
//     padding: 16px 24px;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 16px;
//     outline: none;
//     border-radius: 5px;
//     text-decoration: none;
//     display: inline-block;
//     transition: opacity .3s;
  
//     &:hover,
//     &:focus {
//     opacity: .5;
//     }
// `;

export default Button;