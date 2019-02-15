import React from 'react'
import { RisedButton, TextButton } from '../MaterialDesing/Buttons'

const OrderRow = props => (
    <div className="row" onDoubleClick={()=>{
        console.log('Hola')
    }}>
        <div className="col-3 col i-b v-middle">{props.or._id}</div>
        <div className="col-3 col i-b v-middle">{props.or._client}</div>
        <div className="col-2 col i-b v-middle">{props.or.total_items}</div>
        <div className="col-2 col i-b v-middle">{'$ ' + props.or.total_price}</div>
        <div className="actions col-2 col i-b v-middle">
            <RisedButton label="Editar"/>
            <TextButton label="Eliminar"/>   
        </div>
    </div>
    
)

export default OrderRow