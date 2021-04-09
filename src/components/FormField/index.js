/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  value, onChange, type, label, name, as,
}) {
  const fieldId = `id_${name}`;
  //   Abaixo, cria-se um componente Tag cuja tag, obviamente, é o valor em aspas
  const Tag = {as}
  console.log(type, ' ', as);

  return (
  // {/* Colocando d entro de uma div pra ficar abaixo */}
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        <Tag
        // O exemplo abaixo não funciona porque o JSX só receberá JSX
        // as="textarea"
          as={as}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />

      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  as: 'input',
  onChange: () => {},
};
// Como label e name não possuem valor padrão, são obrigatórios (required)
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  as: PropTypes.string,
};

export default FormField;
