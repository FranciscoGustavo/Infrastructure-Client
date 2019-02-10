import React from 'react'
import { efectRipple } from './functions'

export function SubmitButton(props){
    return (
        <button disabled={props.disabled} type="submit" className="btn btn-rised" onClick={(e) => {
            efectRipple(e)
            props.submit(e)
        }}>
            {props.label || 'Submit'}
        </button>
    )
}

export function RisedButton(props){
    let Icon
    if (props.icon != null) {
        Icon = (<i className={"material-icons " + (props.side || 'right')}>{props.icon}</i>)
    }
    return (
        <button className="btn btn-rised" onClick={(e) => {
            efectRipple(e)
        }}>
            {props.label || 'Submit'}
            {
                Icon
            }
        </button>
    )
}

export function LinkRisedButton(props){
    let Icon
    if (props.icon != null) {
        Icon = (<i className={"material-icons " + (props.side || 'right')}>{props.icon}</i>)
    }
    return (
        <button className="btn btn-rised" onClick={(e) => {
            efectRipple(e)
        }}>
            {props.label || 'Submit'}
            {
                Icon
            }
        </button>
    )
}

export function UnelevatedButton(props){
    let Icon
    if (props.icon != null) {
        Icon = (<i className={"material-icons " + (props.side || 'right')}>{props.icon}</i>)
    }
    return (
        <button className="btn btn-unelevated" onClick={(e) => {
            efectRipple(e)
        }}>
            {props.label || 'Submit'}
            {
                Icon
            }
        </button>
    )
}

export function FlatButton(props){
    let Icon
    if (props.icon != null) {
        Icon = (<i className={"material-icons " + (props.side || 'right')}>{props.icon}</i>)
    }
    return (
        <button className="btn bnt-flat" data-ripple="dark" onClick={(e) => {
            efectRipple(e)
        }}>
            {props.label || 'Submit'}
            {
                Icon
            }
        </button>
    )
}

export function TextButton(props){
    let Icon
    if (props.icon != null) {
        Icon = (<i className={"material-icons " + (props.side || 'right')}>{props.icon}</i>)
    }
    return (
        <button className="btn btn-text" data-ripple="dark" onClick={(e) => {
            efectRipple(e)
        }}>
            {props.label || 'Submit'}
            {
                Icon
            }
        </button>
    )
}