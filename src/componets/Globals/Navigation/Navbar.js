// Dependecies
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navbar as Header} from '../../MaterialDesing/Components/'
import './styles.css'

class Navbar extends Component {
    render () {
        return (
            <Header>
                <button className="btn-icon" onClick={this.props.toggleSideNav}>
                    <i className="material-icons">dehaze</i>
                </button>
                <div className="hi-user">
                    <h3>{'Bienvenido' + this.props.user.jwt.user.name}</h3>
                </div>
            </Header>
        );
    }
}

function mapStateToProps (state, props) {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Navbar)

