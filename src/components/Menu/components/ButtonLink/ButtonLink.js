// Esse button é como o componente seria criado sem o Styled-components.

import React from 'react';

function ButtonLink(props) {
    // props => { className: "O que alguém passar", href: "/" }
    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;