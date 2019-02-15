import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import * as actions from '../../actions/ordersActions'
import TableOrders from './TableOrders'
import OrderRow from './OrderRow'

class Orders extends Component {
    constructor(props){
        super(props)
        this.loadOrders()
    }

    loadOrders(){
        this.props.dispatch(actions.loadAll())
    }

    showOrders(){
        if(this.props.orders.length > 0){
            return this.props.orders.map((order, index)=>{
                return(
                    <tr key={index}>
                        <th>{index+1}</th>
                        <th>{order._id}</th>
                        <th>{order._client}</th>
                        <th>{order.total_items}</th>
                        <th>{order.total_price}</th>
                        <th>
                            <div className="buttons-grup edit-and-delete">
                                <button className="btn btn-flat">
                                    <i className="material-icons">edit</i>
                                </button>
                                <button className="btn btn-flat">
                                    <i className="material-icons">delete</i>
                                </button>  
                            </div>
                        </th>
                    </tr>
                )
            })
        }
        
    }

    render(){
        return(
            <div className="orders">
                <header className="header">
                    <h1>Admistrar Pedidos</h1>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb">Home</Link>
                        <Link to="#" className="breadcrumb">Pedidos</Link>
                    </div> 
                    <div className="add">
                        <Link to="/categories/new" className="btn btn-rised">
                            Agregar Pedido
                        </Link>
                    </div>
                </header>
                <div className="table-container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Productos</th>
                            <th>Total</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.showOrders()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        orders : state.orders
    }
}

export default connect(mapStateToProps)(Orders)