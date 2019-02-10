// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import { TextField } from '../componets/MaterialDesing/Forms'
import { SubmitButton } from '../componets/MaterialDesing/Buttons'

// Request
import {createCategory} from '../request/categories';


// Components



class NewCategory extends Component {
    constructor(props){
        super(props)

        this.state = {
            uploading: false
        }

        this.createNewCategory = this.createNewCategory.bind(this)
        //console.log(this.props.user.jwt.jwt)
    }
 
    createNewCategory(e){
        e.preventDefault()

        this.setState({uploading : true})
        let form = document.querySelector('#NewCategory'),
        data = {
            title : form.title.value
        }
        
        createCategory(data, this.props.user.jwt.jwt)
        .then(res => {
            console.log(res) 
            this.props.dispatch(push('/categories'))
        })
    }

    render () {
        return (
            <div className="new-product">
                <header>
                    <h1 className="title">Nueva Categoria</h1>
                    <div className="breadcrumbs">
                        <Link to="/categories" className="breadcrumb">Categorias</Link>
                        <Link to="#" className="breadcrumb">Nuevo</Link>
                    </div> 
                </header>
                <div className="container-products">
                    <div className="form-new-product card">
                        <form className="col" id="NewCategory">
                            <div className="row">
                                <TextField 
                                    type="text" 
                                    label="Titulo" 
                                    name="title"
                                    id="title"
                                />
                                <div className="col s12">
                                    <SubmitButton 
                                        disabled={this.state.uploading} 
                                        label="Crear" 
                                        submit={this.createNewCategory}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps (state, ownProps) {
    return {
        user : state.user
    }
}

export default  connect(mapStateToProps)(NewCategory)