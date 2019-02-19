import React from 'react'
import { Link } from 'react-router-dom' 

const ProductRow = props => (
    <tr>
        <td></td>
        <td>
            <img src={props.pd.avatarImage} alt=""/>
        </td>
        <td>{props.pd.title}</td>
        <td>{props.pd.description}</td>
        <td>{props.pd._category.title}</td>
        <td>{props.pd.unity}</td>
        <td>{'$ '+props.pd.price}</td>
        <td>
            <div className="buttons-grup edit-and-delete">
                <Link className="btn btn-flat" to={"/products/edit/" + props.pd.slug}>
                    <i className="material-icons">edit</i>
                </Link>
                <button className="btn btn-flat">
                    <i className="material-icons">delete</i>
                </button>  
            </div>
        </td>
    </tr>
)

export default ProductRow