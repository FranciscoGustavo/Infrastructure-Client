import React, { Component } from 'react';
import { connect } from 'react-redux';



class Dashboard extends Component {
    render () {
        return (
            <div className="Dash">
                <h1>HOLA y bienvenido</h1>
            </div>
        )
    }
}
function mapStateToProps (state, props) {
    return {
        products : state.products,
        user : state.user
    }
}

export default connect(mapStateToProps)(Dashboard)