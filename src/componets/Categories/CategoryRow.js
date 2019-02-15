import React from 'react'
import { RisedButton, TextButton } from '../MaterialDesing/Buttons'

const CategoryRow = props => (
    <div className="row">
        <div className="col-6 col i-b v-middle">{props.ct.title}</div>
        <div className="col-3 col i-b v-middle">
            <RisedButton label="Editar"/>
        </div>
        <div className="col-3 col i-b v-middle">
            <TextButton label="Eliminar"/>   
        </div>
    </div>
    
)

export default CategoryRow