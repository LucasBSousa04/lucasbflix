import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../components/FormField'

function CadastraCategoria() {
    // Aqui, cria-se um valor default e o nome da função cujo retorno será 
    // seu parâmetro. que será seu novo estado
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {

        // chave: nome, descricao, bla, bli
        setValues({
            ...values,
            // Esses colchetes sõa análogos a uma chave. Essa é uma funcionalidade nova do Javascript.
            [chave]: valor, //nome: 'valor'
        })
    }
    function handleChange(infosDoEvento) {
        // Aqui, com esse método, setamos o objeto {nomeDaCategoria} com o valor descrito
        // nos parâmetros
        // ATENÇÃO: o parâmetro infosDoEvento é justamente o evento em que houve
        // o change, sendo o target o input em que ocorre o evento e o value o valor dele 
        setValue(infosDoEvento.target.getAttribute("name"),
            infosDoEvento.target.value) // o getAttribute pega o valor do atributo "name"
    }

    return (
        <>
            <PageDefault>
                <h1>Cadastro de categoria: {values['nome']}</h1>
                {/* ATENÇÃO: O ATRIBUTO QUE É PASSADO NO MÉTODO EM EVENTO SERVIRÁ COMO UM "THIS" DO EVENTO EM QUESTÃO */}
                <form onSubmit={function handleSubmit(infosDoEvento) {
                    // Impede uma nova requisição (reload)
                    infosDoEvento.preventDefault();
                    console.log('Você tentou enviar o form.')
                    console.log(values.nome)
                    // Os 3 pontos antes de categorias indicam que se mantém tudo aquilo que está em categorias
                    setCategorias(
                        [...categorias,
                        values]
                    )
                    console.log(categorias)
                    setValues(valoresIniciais);
                    console.log(values.nome, values.descricao, values.cor, 'teste')
                }}>
                    {/* NOTA IMPORTANTE: TODAS as props como parâmetro do componente devem ser passadas */}
                    <FormField
                        label="Nome da categoria: "
                        value={values.nome}
                        onChange={handleChange}
                        name="nome"
                        type="text"
                    />

                    <FormField
                        label="Descrição: "
                        type="textarea"
                        value={values.descricao}
                        onChange={handleChange}
                        name="descricao"
                    />


                    <FormField
                        label="Cor: "
                        type="color"
                        value={values.cor}
                        onChange={handleChange}
                        name="cor"
                    />

                    {/* Colocando dentro de uma div pra ficar abaixo */}
                    {/* <div>
                        <label>
                            Descrição:
                            <input type="textarea"
                                value={values.descricao}
                                name="descricao"
                                // ATENÇÃO: o parâmetro infosDoEvento é justamente o evento em que houve
                                // o change, sendo o target o input em que ocorre o evento e o value o valor dele 
                                onChange={handleChange}
                            >

                            </input>

                        </label>
                    </div>


                    <div>
                        <label>
                            Cor:
                            <input
                                type="color"
                                name="cor"
                                value={values.cor}
                                onChange={handleChange}
                            />                        </label>
                    </div> */}

                    <button>
                        Cadastrar
                    </button>

                </form>
                <ul>
                    {/* O constructor do método map segue o padrão (objeto, indice) */}
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    })}

                </ul>

                <Link to="/">
                    Ir para a Home
                </Link>

            </PageDefault>
        </>


    )
}

export default CadastraCategoria;