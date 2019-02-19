// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
//import { push } from 'react-router-redux'


import * as actions from '../../actions/clientsActions'
//import { postClients } from '../../request/clients'

// Components
import TableClients from './TableClients'
import ClientRow from './ClientRow'
import NewClient from './New'
import EditClient from './Edit'

const clientSchema = {
    address: null,
    email: null,
    name: null,
    password: null,
    photo: null,
    _id: null
}


class Clients extends Component {
    constructor(props){
        super(props)

        this.state = {
            modalIsOpen: false,
            mode : null
        }

        this.client = clientSchema

        this.showClients = this.showClients.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.openNewOrEditClient = this.openNewOrEditClient.bind(this)

        //console.log(this.props)
    }

    openModal() { this.setState({modalIsOpen: true}) }

    closeModal() {
        this.setState({modalIsOpen: false}) 
        this.client = clientSchema
    }

    loadClients(){ this.props.dispatch(actions.loadAll()) }

    showClients(){
        if(this.props.clients.docs){
            return this.props.clients.docs.map((item, index)=>{
                return(<ClientRow key={index} client={item} openModal={this.openNewOrEditClient}/>)
            })
        }
        
    }
    
    openNewOrEditClient(e){
        let btn = null, mode = 'new'
        if (e.target.tagName === 'I') { 
            btn = e.target.parentElement
        } else {
            btn = e.target
        }

        if(btn.getAttribute('client') !== null) {
            this.client = this.props.clients.docs.filter(e => e._id === btn.getAttribute('client'))[0]
            mode = 'edit'
        }

        this.setState({mode})
        this.openModal()
    }

    componentDidMount(){ this.loadClients() }

    modeNewOrEdit(){
        if(this.state.mode === 'new'){
            return (
                <NewClient client={this.client} jwt={this.props.user.jwt.jwt} close={this.closeModal}/>
            )
        } else if(this.state.mode === 'edit') {
            return (
                <EditClient client={this.client} jwt={this.props.user.jwt.jwt} close={this.closeModal}/>
            )
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
                        <button className="btn btn-rised" onClick={this.openNewOrEditClient}>
                            Agregar Cliente
                        </button>
                    </div>
                </header>
                
                <TableClients>
                    {this.showClients()}
                </TableClients>

                <Modal 
                    isOpen={this.state.modalIsOpen} 
                    ariaHideApp={false} 
                    onRequestClose={this.closeModal}
                >
                    {this.modeNewOrEdit()}
                </Modal>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        clients : state.clients,
        user : state.user
    }
}

export default connect(mapStateToProps)(Clients)










































/*saveClient(e){
        e.preventDefault()
        let form = document.querySelector('#newclient')

        let data = {
            name : form.name.value,
            email : form.email.value,
            password : form.password.value
        }

        postClients(data).then(result => {
            this.closeModal()
            this.props.dispatch(push('/clients'))
        })
    }

    changeAvatar(e){
        console.log(e.target.files)

        let url =  URL.createObjectURL(e.target.files[0]);
        let client = {
            cover: url
        }

        this.setState({client})
    }*/