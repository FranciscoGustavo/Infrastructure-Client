// Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

// User actions and request
import createSession from '../request/users'
import * as actions from '../actions/userActions'

// Components
import { TextField } from '../componets/MaterialDesing/Forms'
import { SubmitButton } from '../componets/MaterialDesing/Buttons'

class LogIn extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login (e) {
        e.preventDefault();
        const form = document.querySelector('#Login');
        const data = {
            email : form.email.value || 'tavo@mail.com',
            password : form.password.value || '123456'
        }

        createSession(data).then(res => {
            this.props.dispatch(actions.login(res))
            this.props.dispatch(push('/'))
        });

    }

    render () {
        return (
            <div className="row card-login card">
                <div className="col">
                    <h1 className="title">Iniciar Sessión</h1>
                </div>
                <form className="col" id="Login">
                    <div className="row">
                        <TextField 
                            id="email" 
                            type="email" 
                            name="email" 
                            label="Correo Electronico"
                        />
                        
                        <TextField 
                            id="password" 
                            type="password" 
                            name="password" 
                            label="Contraseña"
                        />
                        <div className="col s12">
                            <SubmitButton label="Entrar" submit={this.login}/>
                        </div>
                    </div>
                </form>
            </div>                 
        );
    }
}

function mapStateToProps (state, props) {
    return {}
}

export default connect(mapStateToProps)(LogIn)