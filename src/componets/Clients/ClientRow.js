import React from 'react'
import { RisedButton, TextButton } from '../MaterialDesing/Buttons'

const ClientRow = props => (
    <div className="row">
        <div className="col-3 col i-b v-middle">{props.cl.name}</div>
        <div className="actions col-3 col i-b v-middle">{props.cl.email}</div>
        <div className="actions col-3 col i-b v-middle">{props.cl.address}</div>
        <div className="col-3 col i-b v-middle">
            <RisedButton label="Editar"/>
            <TextButton label="Eliminar"/>   
        </div>
    </div>
    
)

export default ClientRow