import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CadastroVideo() {
  const { handleChange, values } = useForm({
    // Abaixo estão os dadosIniciais
    titulo: 'Vídeo Padrão',
    url: '',
  });
  const history = useHistory();

  return (
    <>
      <PageDefault>
        <h1>Cadastro de vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          // eslint-disable-next-line no-alert
          alert('Vídeo cadastrado com sucesso!');
          // Faz o usuário voltar à Home.
          history.push('/');
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
