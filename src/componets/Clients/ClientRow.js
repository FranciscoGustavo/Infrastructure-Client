import React from 'react'

const ClientRow = props => (
    <tr>
        <td>{}</td>
        <td>
            <img src={props.client.photo} alt=""/>
        </td>
        <td>{props.client.name}</td>
        <td>{props.client.email}</td>
        <td>{props.client.address}</td>
        <td>
            <div className="buttons-grup edit-and-delete">
                <button className="btn btn-flat" client={props.client._id} onClick={props.openModal}>
                    <i className="material-icons">edit</i>
                </button>
                <button className="btn btn-flat">
                    <i className="material-icons">delete</i>
                </button>  
            </div>
        </td>
    </tr>
)

export default ClientRow