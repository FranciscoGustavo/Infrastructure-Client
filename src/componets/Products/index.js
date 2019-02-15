// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
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
        //console.log(this.props)
    }

    showProducts () {
        //console.log(this.props)
        if(this.props.products.docs){
            return this.props.products.docs.map((product, index) => {
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                            <img src={product.avatarImage} alt=""/>
                        </td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product._category.title}</td>
                        <td>{product.unity}</td>
                        <td>{'$ '+product.price}</td>
                        <td>
                            <div className="buttons-grup edit-and-delete">
                                <button className="btn btn-flat">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button className="btn btn-flat">
                                    <i className="material-icons">delete</i>
                                </button>  
                            </div>
                        </td>
                    </tr>
                )
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
                            {this.showProducts()}
                        </tbody>
                    </table>
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