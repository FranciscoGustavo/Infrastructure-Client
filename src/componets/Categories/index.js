// Dependecias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Actions
import * as actions from "../../actions/categoriesActions";

// Styles
import './styles.css'

class Categories extends Component {
    constructor(props){
        super(props)
        this.props.dispatch(actions.loadAll())
    }

    showCategories(){
        return this.props.categories.map((element, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.title}</td>
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

    render () {
        return (
            <div className="categories">
                <header className="header">
                    <h1>Admistrar Categorias</h1>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb">Home</Link>
                        <Link to="#" className="breadcrumb">Categorias</Link>
                    </div> 
                    <div className="add">
                        <Link to="/categories/new" className="btn btn-rised">
                            Agregar categoria
                        </Link>
                    </div>
                </header>
                <div className="table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Titulo</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.showCategories()}
                        </tbody>
                    </table>
                </div>
            
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        categories : state.categories
    }
}

export default  connect(mapStateToProps)(Categories)