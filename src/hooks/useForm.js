import { useState } from 'react';

export default function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: titulo, descricao, bla, bli
    setValues({
      ...values,
      // Esses colchetes sõa análogos a uma chave. Essa é uma funcionalidade nova do Javascript.
      [chave]: valor, // titulo: 'valor'
    });
  }
  function handleChange(infosDoEvento) {
    // Aqui, com esse método, setamos o objeto {tituloDaCategoria} com o valor descrito
    // nos parâmetros
    // ATENÇÃO: o parâmetro infosDoEvento é justamente o evento em que houve
    // o change, sendo o target o input em que ocorre o evento e o value o valor dele
    setValue(infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value); // o getAttribute pega o valor do atributo "name"
  }
  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
