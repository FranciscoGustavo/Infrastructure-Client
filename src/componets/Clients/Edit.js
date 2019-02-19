// Dependencies
import React, { Component } from 'react'
//import { push } from 'react-router-redux'

import { updateClient } from '../../request/clients'

// Components
import Form from './Form'

export default class EditClient extends Component {
    constructor(props){
        super(props)

        this.saveClient = this.saveClient.bind(this)
    }



    saveClient(data){
        data = new ValidForm(data).validData()
        updateClient(data, this.props.jwt, this.props.client._id)
        .then(result => {
            this.props.close()
            //console.log(result)
            //this.props.dispatch(push('/clients'))
        })

    }

    render(){
        return (
            <div className="container-form">
                <Form client={this.props.client} save={this.saveClient}/>
            </div>
        )
    }
}

class ValidForm {
    constructor(data){
        this.data = data

    }

    validData(){
        if(this.data.email !== null && this.data.email !== ""){
            let regex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
            //let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!regex.test(this.data.email)){
                console.log("Email Invalido")
                return false
            }
        } else {
            console.log("El email no puede ir vacio")

            return false
        }

        if(this.data.password === null || this.data.password === ""){
            delete this.data.password
        }

        return this.data 
    }
}