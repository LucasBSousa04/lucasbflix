/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import config from '../../config';

// Abaixo é um custom hook. É obrigatório nomeá-lo com "use".

function CadastraCategoria() {
  // Aqui, cria-se um valor default e o titulo da função cujo retorno será
  // seu parâmetro. que será seu novo estado
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  // Tem como parãmetros uma função e um array que indica quando a função ocorre (quando há
  // mudanças no que é especificado).
  useEffect(() => {
    const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;
    fetch(URL_CATEGORIAS)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        console.log(resposta);
        setCategorias([
          ...resposta,
        ]);
        console.log(categorias);
      });

    // setTimeout(() => {
    //   setCategorias(
    //     [...categorias,
    //       {
    //         id: 1,
    //         titulo: 'Front End',
    //         descricao: 'Uma categoria show',
    //         cor: '#6bd1ff',
    //       },
    //       {
    //         id: 2,
    //         titulo: 'Back End',
    //         descricao: 'Outra categoria show',
    //         cor: '#6bd1ff',
    //       }],
    //   );
    // }, 4 * 1000);
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de categoria:
          {values.titulo}
        </h1>
        {/* ATENÇÃO: O ATRIBUTO QUE É PASSADO NO MÉTODO EM EVENTO SERVIRÁ COMO UM "THIS" DO
        EVENTO EM QUESTÃO */}
        <form onSubmit={function handleSubmit(infosDoEvento) {
          // Impede uma nova requisição (reload)
          infosDoEvento.preventDefault();
          //   console.log('Você tentou enviar o form.');
          //   console.log(values.titulo);
          // Os 3 pontos antes de categorias indicam que se mantém tudo aquilo que está emcategorias
          setCategorias(
            [...categorias,
              values],
          );
          //   console.log(categorias);
          clearForm();
        //   console.log(values.titulo, values.descricao, values.cor, 'teste');
        }}
        >
          {/* NOTA IMPORTANTE: TODAS as props como parâmetro do componente devem ser passadas */}
          <FormField
            label="titulo da categoria"
            value={values.titulo}
            onChange={handleChange}
            name="titulo"
            type="text"
          />

          <FormField
            label="Descrição"
            type="textarea"
            value={values.descricao}
            onChange={handleChange}
            name="descricao"
            as="textarea"
          />

          <FormField
            label="Cor"
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
                            // o change, sendo o target o input em que ocorre o evento
                            e o value o valor dele
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

          <Button>
            Cadastrar
          </Button>
        </form>
        {/* Sendo o array de categorias vazio, há a existência da div */}
        {categorias.length === 0 && (
        <div>
          {/* Cargando */}
          loading
        </div>

        )}
        <ul>
          {/* O constructor do método map segue o padrão (objeto, indice) */}
          {categorias.map((categoria) => (
            // eslint-disable-next-line react/no-array-index-key
            // FAZER A DESCRIÇÃO APARECER QUANDO ELA EXISTE
            <li key={`${categoria.id}`}>
              {categoria.titulo}
              {'link_extra' in categoria && ` - ${categoria.link_extra.text}`}
            </li>
          ))}

        </ul>

        <Link to="/">
          Ir para a Home
        </Link>

      </PageDefault>
    </>

  );
}

export default CadastraCategoria;
