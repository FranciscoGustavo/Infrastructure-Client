import React from 'react';
import './styles.css';

const TableClients = props => (
    <div className="table-container">
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Foto</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {props.children}
            </tbody>
        </table>
    </div>
)

export default TableClients