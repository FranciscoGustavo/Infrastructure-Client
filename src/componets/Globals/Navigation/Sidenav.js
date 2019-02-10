// Dependencies
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Sidenav as Menu} from '../../MaterialDesing/Components'

// Styles
import './styles.css'

const Sidenav = function (props) {
    return(
        <Menu>
            <li onClick={props.toggleSideNav}>
                <Link to="/">Home</Link>
            </li>
            <li onClick={props.toggleSideNav}>
                <Link to="/products">Productos</Link>
            </li>
            <li onClick={props.toggleSideNav}>
                <Link to="/categories">Categorias</Link>
            </li>
        </Menu>
    )
}

export default Sidenav