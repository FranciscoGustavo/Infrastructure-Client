import React from 'react'
import { RisedButton, TextButton } from '../MaterialDesing/Buttons'

const ProductRow = props => (
    <div className="row">
        <div className="col-2 col i-b v-middle">{props.pd.title}</div>
        <div className="col-3 col i-b v-middle">{props.pd.description}</div>
        <div className="col-2 col i-b v-middle">{props.pd._category.title}</div>
        <div className="col-1 col i-b v-middle">{props.pd.unity}</div>
        <div className="col-1 col i-b v-middle">{props.pd.price}</div>
        <div className="col-1 col i-b v-middle">
<RisedButton label="Editar"/>
        </div>
        <div className="col-1 col i-b v-middle">
<TextButton label="Eliminar"/>   
</div>
    </div>
    
)

export default ProductRow