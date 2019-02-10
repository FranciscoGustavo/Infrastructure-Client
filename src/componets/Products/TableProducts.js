import React from 'react';
import './styles.css';

const TableProducts = props => (
    <div className="table-products">
        <header>
            <div className="row">
                <div className="col-2 col i-b v-middle">Title</div>
                <div className="col-3 col i-b v-middle">Description</div>
                <div className="col-2 col i-b v-middle">Category</div>
                <div className="col-1 col i-b v-middle">Unity</div>
                <div className="col-1 col i-b v-middle">Price</div>
                <div className="actions col-2 col i-b v-middle">Acciones</div>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </div>
)

export default TableProducts