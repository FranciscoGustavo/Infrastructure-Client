import React from 'react';

const TableProducts = props => (
    <div className="table-container">
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Imagen</th>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th>Categoria</th>
                <th>Unidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
            </thead>

            <tbody>
                {props.children}
            </tbody>
        </table>
    </div> 
)

export default TableProducts