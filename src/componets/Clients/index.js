import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { push } from 'react-router-redux'

import * as actions from '../../actions/clientsActions'
import { postClients } from '../../request/clients'


class Clients extends Component {
    constructor(props){
        super(props)
        this.loadClients()
        this.state = {
            modalIsOpen: false,
            client : {
                name : null,
                email : null, 
            }
        }
        this.showClients = this.showClients.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.inputMD = this.inputMD.bind(this)
        this.saveClient = this.saveClient.bind(this)
    }

    inputMD (e){
        if (e.target.value === "") return e.target.classList.remove("non-empty");
    
            e.target.classList.add("non-empty");
    }

    openModal(e) {
        this.setState({modalIsOpen: true});

        if(e.target.getAttribute('client') != null){
            
            let clientArr = this.props.clients.docs.filter(element => element._id == e.target.getAttribute('client'))
            /*let client = {

            }*/
            console.log(clientArr[0])
            this.setState({
                client : clientArr[0]
            })
        }
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

    loadClients(){
        this.props.dispatch(actions.loadAll())
    }

    saveClient(e){
        e.preventDefault()
        let form = document.querySelector('#newclient')

        let data = {
            name : form.name.value,
            email : form.email.value,
            password : form.password.value
        }

        postClients(data).then(result => {
            this.closeModal()
            console.log(data)
            this.props.dispatch(push('/clients'))
        })
    }

    showClients(){
        if(this.props.clients.docs){
            return this.props.clients.docs.map((client, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>
                            <img src={client.photo} alt=""/>
                        </td>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.address}</td>
                        <td>
                            <div className="buttons-grup edit-and-delete">
                                <button className="btn btn-flat" client={client._id} onClick={this.openModal}>
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

    render(){
        return(
            <div className="clients">
                <header className="header">
                    <h1>Administrar Clientes</h1>
                    <div className="breadcrumbs">
                        <Link to="/" className="breadcrumb">Home</Link>
                        <Link to="#" className="breadcrumb">Clientes</Link>
                    </div> 
                    <div className="add">
                        <button className="btn btn-rised" onClick={this.openModal}>
                            Agregar Cliente
                        </button>
                    </div>
                </header>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Foto</th>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Direccion</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.showClients()}
                        </tbody>
                    </table>
                </div>

                <Modal isOpen={this.state.modalIsOpen} ariaHideApp={false}>
                    <div className="container-form">
                        <form id="newclient">
                            <div className="input-field col s12">
                                <input id="name" type="text" className="validate" name="name" onKeyUp={this.inputMD} defaultValue={this.state.client.name || ""}/>
                                <label htmlFor="name">Nombre</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" name="email" onKeyUp={this.inputMD} defaultValue={this.state.client.email || ""}/>
                                <label htmlFor="email">Correo Electronico</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate" name="password" onKeyUp={this.inputMD}/>
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div className="input-field col s12">
                                <button type="submit" className="btn btn-rised" onClick={this.saveClient}>
                                    Guardar
                                </button>
                            </div>
                        </form>

                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        clients : state.clients
    }
}

export default connect(mapStateToProps)(Clients)