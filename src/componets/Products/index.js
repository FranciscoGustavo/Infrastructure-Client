// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import * as actions from '../../actions/productsActions';

// Components
import TableProducts from './TableProducts';
import ProductRow from './ProductRow';


class Products extends Component {
    constructor (props) {
        super(props);
       
       // this.showNewPeoduct = this.showNewPeoduct.bind(this)
        this.openNewProduct = this.openNewProduct.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.load();
    }

    load () {
        this.props.dispatch(actions.loadAll())
    }

    showProducts () {
        if(this.props.products.docs){
            return this.props.products.docs.map((product, index) => {
                return <ProductRow key={index} pd={product}/>
            })
        }
        
    }

    openNewProduct () {
        this.setState({ newProduct : true})
    }

    closeModal () {
        this.setState({ newProduct : false})
    }

   // showNewPeoduct () { return this.state.newProduct }

    render () {
        return (
            <div className="products">
                <header className="header">
                    <h1>Administrar Productos</h1>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb">Home</Link>
                        <Link to="#" className="breadcrumb">Productos</Link>
                    </div> 
                    <div className="add">
                        <Link to="/products/new" className="btn btn-rised">
                            Agregar Producto
                        </Link>
                    </div>
                </header>

                <TableProducts>
                    {this.showProducts()}
                </TableProducts>

            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        products : state.products
    }
}

export default  connect(mapStateToProps)(Products)