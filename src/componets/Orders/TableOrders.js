import React from 'react';
import './styles.css';

const TableOrders = props => (
    <div className="table-products table">
        <header>
            <div className="row">
                <div className="col-3 col i-b v-middle" >ID</div>
                <div className="col-3 col i-b v-middle">Cliente</div>
                <div className="col-2 col i-b v-middle">Productos</div>
                <div className="col-2 col i-b v-middle">Total</div>
                <div className="actions col-2 col i-b v-middle">Acciones</div>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </div>
)

export default TableOrders