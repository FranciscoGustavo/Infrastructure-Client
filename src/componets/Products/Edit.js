// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// Request
import * as actions from '../../actions/productsActions';
import * as action from '../../actions/categoriesActions'


// Components
import Form from './Form'
//import { reject } from 'q';



class EditProduct extends Component {
    constructor(props){
        super(props)
        this.state = {
            form : false
        }

        this.loadProduct = this.loadProduct.bind(this)
        this.saveProduct = this.saveProduct.bind(this)
    
    }
    
    loadProduct(){
        this.props.dispatch(actions.loadOne(this.props.match.params.slug))
        this.props.dispatch(action.loadAll())
    }
    
    componentDidMount(){ 
        this.loadProduct()
        setTimeout(()=>{
            this.setState({form : true})
        }, 500)

    }
    

    isLoadProduct(){
       //console.log(this.props.product)
        if(this.state.form){
            return <Form product={this.props.product} categories={this.props.categories} save={this.saveProduct}/>
        } else {
            return <h1>Cargando</h1>
        }
    }

    saveProduct(data){
        //console.log(data._category)
        this.props.dispatch(actions.update(data, this.props.user.jwt.jwt, this.props.product.slug))
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
                


                {this.isLoadProduct()}

            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        categories : state.categories,
        product : state.products,
        user : state.user
    }
}

export default  connect(mapStateToProps)(EditProduct)