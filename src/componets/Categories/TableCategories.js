import React from 'react';
import './styles.css';

const TableCategories = props => (
    <div className="table-products table">
        <header>
            <div className="row">
                <div className="col-6 col i-b v-middle">Title</div>
                <div className="actions col-6 col i-b v-middle">Acciones</div>
            </div>
        </header>
        <main>
            {props.children}
        </main>
    </div>
)

export default TableCategories