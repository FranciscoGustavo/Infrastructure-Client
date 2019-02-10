// Dependencies
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'

// Components
import Navbar from '../src/componets/Globals/Navigation/Navbar'
import Sidenav from './componets/Globals/Navigation/Sidenav'



class App extends Component {
  constructor(props){
    super(props)

    this.toggleSideNav = this.toggleSideNav.bind(this)
  }

  toggleSideNav(){
    let sideNav = document.querySelector('.sidenav'),
        sidenavOverlay = document.querySelector('.sidenav-overlay')
        
    sideNav.classList.toggle('active')
    sidenavOverlay.classList.toggle('active')
  }

  render() {
    return (
      <div className="main">
        <Navbar toggleSideNav={this.toggleSideNav}/>
        <Sidenav toggleSideNav={this.toggleSideNav}/>
        <div className="sidenav-overlay" onClick={this.toggleSideNav}></div>
        <TransitionGroup className="content">
          <CSSTransition key={this.props.location.pathname.split('/')[1]} timeout={5000} classNames='star'>
            {this.props.children}
          </CSSTransition>
        </TransitionGroup>
      </div>
        
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps)(App));
