import React, { Component } from 'react'

export default class InputField extends Component {
    constructor(props){
        super(props)

        this.state = {
            isEmpty : '',
            value : this.props.value || ''
        }
       
        this.handleonKeyUp = this.handleonKeyUp.bind(this)
        this.isEmptyInput = this.isEmptyInput.bind(this)
        
    }
    
    componentDidMount(){
        this.isEmptyInput()
    }

    handleonKeyUp(e){
        this.setState({value : e.target.value})
        this.isEmptyInput()
    }

    isEmptyInput(){
        if (this.state.value === ""){
            this.setState({isEmpty: ''})
        } else {
            this.setState({isEmpty: 'non-empty'})
        }
    }

    render(){
        return(
            <div className="input-field col s12">
                <input 
                    id={this.props.id}
                    ref={this.props.inputRef} 
                    type={this.props.type} 
                    className={"validate " + this.state.isEmpty}
                    name={this.props.id}
                    defaultValue={this.state.value}
                    onKeyUp ={this.handleonKeyUp}
                />

                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
    
} 