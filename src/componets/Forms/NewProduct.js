import React from 'react';
import { TitleField, TextArea, SelectOptions, NumberField,SubmitButton } from './Inputs';

const CreateProduct = function (props) {
    return (
        <div className="row">
            <h3 className="padding-left_75">Nuevo Producto</h3>
            <form className="col s12">
                <div className="row">
                    <TitleField label='Titulo'/>
                    <TextArea label='Descipción'/>
                    <NumberField label='Precio'/>
                    <SelectOptions label='Categoria' default='Seleciona Una Categoria'>
                        <option value='njsjn'>One more</option>
                        <option value='njsjn'>One more</option>
                        <option value='njsjn'>One more</option>
                    </SelectOptions>
                    <SelectOptions label='Unidad' default='Seleciona Una Unidad'>
                        <option value='njsjn'>One more</option>
                        <option value='njsjn'>One more</option>
                        <option value='njsjn'>One more</option>
                    </SelectOptions>
                    <SubmitButton label='Guardar Producto' submit={()=>{}}/>
                </div>
            </form>
        </div>
    );
}

export default CreateProduct;