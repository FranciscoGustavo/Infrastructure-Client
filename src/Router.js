// Dependencies
import React, { Component } from 'react'
import App from './App'
import { connect  } from 'react-redux'
import {
  Router as ReactRouter,
  Route,
  Switch
} from 'react-router-dom'

// Components
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import NewProduct from './pages/NewProduct'
import Categories from './pages/Categories'
import NewCategory from './pages/NewCategory'

// styles CSS
import './library-full-v1.0.css'
import './componets/MaterialDesing/styles.css'
import './App.css'

class Router extends Component {
  userLoggedIn () {
    if (this.props.user.jwt) {
      return (
        <ReactRouter history={this.props.history}>
            <App>
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/products/new" component={NewProduct}></Route>
                <Route exact path="/categories" component={Categories}></Route>
                <Route exact path="/categories/new" component={NewCategory}></Route>
              </Switch>
              </App>
        </ReactRouter>
      )
    } else {
      return (
        <LogIn/>
      )
    }
  }
  
  render() {
    return (
      this.userLoggedIn()
    );
  }
}

function mapStateToProps (state, props) {
  return {
    user : state.user
  }
}

export default connect(mapStateToProps)(Router)