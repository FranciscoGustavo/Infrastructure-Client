import React from 'react';
import './styles.css';

const TableClients = props => (
    <div className="table-products table">
        <header>
            <div className="row">
                <div className="col-3 col i-b v-middle">Name</div>
                <div className="actions col-3 col i-b v-middle">Email</div>
                <div className="actions col-3 col i-b v-middle">Dirección</div>
                <div className="actions col-3 col i-b v-middle">Acciones</div>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </div>
)

export default TableClients