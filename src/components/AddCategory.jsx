/* ----- Componente para llenar un formulario e ir almacenando en un arrelgo 
 la infor,acion solicitado, 
 de igual forma, se reseteara el campo para nuevamnete poder agregar
 un nuevo dato  -------*/

import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    } 

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}

export default AddCategory