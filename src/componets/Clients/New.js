// Dependencies
import React, { Component } from 'react'

// Components
import Form from './Form'

export default class NewClient extends Component {
    constructor(props){
        super(props)

        this.saveClient = this.saveClient.bind(this)
    }

    saveClient(data){
        console.log(data)
    }

    render(){
        return (
            <div className="container-form">
                <Form client={this.props.client} save={this.saveClient}/>
            </div>
        )
    }
}


