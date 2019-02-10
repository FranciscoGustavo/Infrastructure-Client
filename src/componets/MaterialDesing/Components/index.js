// Dependecies
import React from 'react'

// Styles
import './styles.css'

/*
 *  Navbar 
 * 
*/
export function Navbar(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                {props.children}
            </div>
        </nav>
    )
}

/*
 * Sidenav
 *
*/
export function Sidenav(props){
    return (
        <ul className="sidenav">
            { props.children }
        </ul>
    )
}


