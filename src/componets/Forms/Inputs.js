import React from 'react';

export function SelectOptions (props) {
    return (
        <div className="col s12">
            <label>{props.label || 'Select'}</label>
            <select>
                <option defaultValue="" select='true'>{props.default || 'Choose your option'}</option>
                {props.children}
            </select>
        </div>
    );
}

export function TextArea (props) {
    return (
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"></textarea>
          <label htmlFor="textarea1">Textarea</label>
        </div>
    );
}

export function NumberField (props) {
    return (
        <div className="input-field col s12">
            <input id="Number" type="number" className="validate" name={props.name || 'Number'}/>
            <label htmlFor="Number">{props.label || 'Number'}</label>
        </div>
    );
}

export function TitleField (props) {
    return (
        <div className="input-field col s12">
            <input id="Title" type="text" className="validate" name="Title"/>
            <label htmlFor="Title">{props.label || 'Title'}</label>
        </div>
    );
}

export function EmailField (props) {
    return (
        <div className="input-field col s12">
            <input id="email" type="email" className="validate" name="email"/>
            <label htmlFor="email">{props.label || 'Email'}</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
    );
}

export function PasswordField (props) {
    return (
        <div className="input-field col s12">
            <input id="password" type="password" className="validate" name="password"/>
            <label htmlFor="password">{props.label || 'Password'}</label>
        </div>
    );
}

export function SubmitButton (props) {
    return (
        <div className="input-field col s12">
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={props.submit}>
                {props.label || 'Submit'}
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
}