import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import * as actions from "../actions/categoriesActions";

class Categories extends Component {
    constructor(props){
        super(props)
        this.props.dispatch(actions.loadAll())
    }

    showCategories(){
        return this.props.categories.map((element, index) => {
            return (
                <div key={index}>
                    {element.title}
                </div>
            )
        })
    }

    render () {
        return (
            <div className="container">
                <header>
                    <div className="breadcrumbs">
                        <Link to="/categories" className="breadcrumb">Categorias</Link>
                        <Link to="#" className="breadcrumb">Todos</Link>
                    </div> 
                    <div>
                        <Link to="/categories/new" className="btn btn-rised">
                            Nueva categoria
                        </Link>
                    </div>
                </header>
                <h1>Categorias</h1>

                {this.showCategories()}
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