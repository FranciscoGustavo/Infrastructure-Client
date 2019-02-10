// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import * as actions from '../actions/productsActions';

// Components
import TableProducts from '../componets/Products/TableProducts';
import ProductRow from '../componets/Products/ProductRow';

Modal.setAppElement('#root')

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
        //console.log(this.props)
    }

    showProducts () {
        //console.log(this.props)
        if(this.props.products.docs){
            return this.props.products.docs.map((product, index) => {
                return (<ProductRow key={index} pd={product}/>)
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
                <header>
                    <div className="breadcrumbs">
                        <Link to="/products" className="breadcrumb">Productos</Link>
                        <Link to="#" className="breadcrumb">Todos</Link>
                    </div> 
                    <div>
                        <Link to="/products/new" className="btn btn-rised">
                            Nuevo Producto
                        </Link>
                    </div>
                </header>
                               
                <div className="container-products">
                    <TableProducts>
                        {this.showProducts()}
                    </TableProducts>
                </div>                               
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