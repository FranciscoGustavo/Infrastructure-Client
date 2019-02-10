// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'

import { TextField } from '../componets/MaterialDesing/Forms'
import { SubmitButton } from '../componets/MaterialDesing/Buttons'

// Request
import { createProdut } from '../request/products';


// Components



class NewProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            uploading: false
        }

        this.createNewProduct = this.createNewProduct.bind(this)
        //console.log(this.props.user.jwt.jwt)
    }
 
    createNewProduct (e){
        this.setState({uploading : true})
        let form = document.querySelector('#NewProduct'),
        data = {
            title : form.title.value,
            description : form.description.value,
            _category : form.category.value,
            price : form.price.value,
            unity : form.unity.value,
            cover : form.cover.files[0]
        }
        
       // console.log(form.cover.files)
        console.log(data)

        createProdut(data,this.props.user.jwt.jwt)
        .then((res)=>{
            this.props.dispatch(push('/'))
        })
    
    }

    render () {
        return (
            <div className="new-product">
                <header>
                    <h1 className="title">Productos</h1>
                    <div className="breadcrumbs">
                        <Link to="/products" className="breadcrumb">Productos</Link>
                        <Link to="#" className="breadcrumb">Nuevo</Link>
                    </div> 
                </header>
                <div className="container-products">
                    <div className="form-new-product card">
                        <form className="col" id="NewProduct">
                            <div className="row">
                                <TextField 
                                    type="text" 
                                    label="Titulo" 
                                    name="title"
                                    id="title"
                                />
                                <TextField 
                                    type="text" 
                                    label="Descripción" 
                                    name="description"
                                    id="description"
                                />
                                <TextField 
                                    type="text" 
                                    label="Categoria" 
                                    name="category"
                                    id="category"
                                />
                                <TextField 
                                    type="number" 
                                    label="Precio" 
                                    name="price"
                                    id="price"
                                />
                                <TextField 
                                    type="text" 
                                    label="Unidad" 
                                    name="unity"
                                    id="unity"
                                />
                                <input type="file" name="cover"/>
                                <div className="col s12">
                                    <SubmitButton 
                                        disabled={this.state.uploading} 
                                        label="Crear" 
                                        submit={this.createNewProduct}
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

export default  connect(mapStateToProps)(NewProduct)