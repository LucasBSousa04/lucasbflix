import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom'

function CadastraCategoria() {
    // Aqui, cria-se um valor default e o nome da função cujo retorno será 
    // seu parâmetro. que será seu novo estado
    const [categorias, setCategorias] = useState(['teste']);
    const [nomeDaCategoria, setNomeDaCategoria] =  useState('Valor inicial'); 

    return (
        <>
            <PageDefault> 
                <h1>Cadastro de categoria: {nomeDaCategoria}</h1>
                <form onSubmit={function handleSubmit(infosDoEvento) {
                    // Impede uma nova requisição (reload)
                    infosDoEvento.preventDefault();
                    console.log('Você tentou enviar o form.')
                    // Os 3 pontos antes de categorias indicam que se mantém tudo aquilo que está em categorias
                    setCategorias(
                        [...categorias,
                        nomeDaCategoria]
                    )
                }}>
      
                    <label>
                        Nome da Categoria:
                            <input type="text" 
                            value={nomeDaCategoria}
                            onChange={function funcaoHandler(infosDoEvento){
                                // Aqui, com esse método, setamos o objeto {nomeDaCategoria} com o valor descrito
                                // nos parâmetros
                                setNomeDaCategoria(infosDoEvento.target.value)
                            }}/>

                    </label>
                    <button>
                        Cadastrar
                        </button>

                </form>
                <ul>
                    {/* O constructor do método map segue o padrão (objeto, indice) */}
                    {categorias.map((categoria, indice)=>{
                        return(                           
                            <li key={`${categoria}${indice}`}>
                                {categoria}
                            </li>
                        )})}
         
                </ul>

                <Link to="/">
                    Ir para a Home
                </Link> 

            </PageDefault>
        </>


    )
}

export default CadastraCategoria;