import React from 'react'
import './styles.css'

export function SelectOptions (props) {
    return (
        <div className="col s12">
            <label>{props.label || 'Select'}</label>
            <select>
                <option defaultValue="" select='true'>{props.default || 'Choose your option'}</option>
                {props.children}
            </select>
        </div>
    )
}

/* 
 * Text Area 
 *
 * Receives three properties:
 * 
 *  1: id    =>  Unique identifier
 *  2: name  =>  Name with which you will identify
 *  3: label =>  Text to be displayed on the screen
 * 
*/
export function TextArea (props) {
    return (
        <div className="input-field col">
          <textarea 
            id={props.id || 'textarea'}
            name={props.name || 'textarea'} 
          ></textarea>
          
          <label htmlFor={props.id || 'textarea'} >
            {props.label || 'TextArea'}
          </label>
        </div>
    )
}

/* 
 * Text Field 
 *
 * Receives four properties:
 * 
 *  1: id    =>  Unique identifier
 *  2: type  =>  Define type of field
 *  3: name  =>  Name with which you will identify
 *  4: label =>  Text to be displayed on the screen
 * 
*/
export function TextField (props) {
    return (
        <div className="input-field col">
            <input 
                id={props.id || 'textfield'} 
                type={props.type || 'text'}
                name={props.name || 'textfield'}
                onKeyUp={inputMD}
            />

            <label 
                htmlFor={props.id || 'textfield'}
            >
                {props.label || 'TextField'}
            </label>
        </div>
    )
}

function inputMD (e){
    if (e.target.value === "") return e.target.classList.remove("non-empty");

		e.target.classList.add("non-empty");
}