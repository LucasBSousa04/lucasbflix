import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import videosRepository from '../../repositories/videos';

function CadastroVideo() {
  const { handleChange, values } = useForm({
    // Abaixo estão os dadosIniciais
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=PWY2whuqcMw',
    categoria: 'Front-end',
  });
  const history = useHistory();

  return (
    <>
      <PageDefault>
        <h1>Cadastro de vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          // Faz o usuário voltar à Home.

          // Note que ele retorna o fetch, que é uma Promise.
          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
          // O then fará com que quando o objeto for adicionado ao db
            .then(() => {
              console.log('Cadastrou com sucesso');
              history.push('/');
            });
        }}
        >
          <FormField
            name="titulo"
            label="Título do vídeo"
            value={values.titulo}
            onChange={handleChange}
          />
          <FormField
            name="url"
            label="URL"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            name="categoria"
            label="Categoria"
            value={values.categoria}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>

        </form>

        <Link to="/cadastro/categoria">
          Cadastrar categoria
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroVideo;
