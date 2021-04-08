import React from "react";

function FormField({ value, onChange, type, label, name }) {
    const isTypeTextArea = type === 'textarea';
    const tag = isTypeTextArea ? 'textarea' : 'input';
    return(
        // {/* Colocando dentro de uma div pra ficar abaixo */}
        <div>
        <label>
            {label}
            <input type={type}
                // as={tag}
                name={name}
                value={value}
                onChange={onChange}
            />

        </label>
    </div>
    )
}

export default FormField;