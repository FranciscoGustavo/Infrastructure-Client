import React, { Component } from 'react'
import InputField from '../Globals/Forms/InputField'

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            cover : this.props.client.photo || ''
        }

        //console.log(props)
        this.photo = React.createRef()
        this.name = React.createRef()
        this.address = React.createRef()
        this.email = React.createRef()
        this.password = React.createRef()

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleSubmit(e){
        e.preventDefault()
        //console.log(this.name.current.defaultValue)
        let data = {
            cover : this.photo.current.files[0],
            name : this.name.current.defaultValue,
            address : this.address.current.defaultValue,
            email : this.email.current.defaultValue,
            password : this.password.current.defaultValue
        }

        this.props.save(data)
    }

    handleChange(e){

        let url =  URL.createObjectURL(e.target.files[0]);

        this.setState({cover : url})
    }

    render(){
        return(
            <form id="newclient" onSubmit={this.handleSubmit}>
                <div className="avatar col s12">
                    <div 
                        className="avatar-image" 
                        style={
                            {backgroundImage: 'url(' + (this.state.cover) + ')'}
                        } 
                    ></div>
                    <input id="photo" type="file" className="validate" name="cover" ref={this.photo} onChange={this.handleChange}/>
                    <label htmlFor="photo">
                        <i className="material-icons">photo_camera</i>
                    </label>
                </div>
        
                <InputField label="Nombre" id="name" type="text" inputRef={this.name} value={this.props.client.name}/>

                <InputField label="Dirección" id="address" type="text" inputRef={this.address} value={this.props.client.address}/>

                <InputField label="Correo Electronico" id="email" type="email" inputRef={this.email} value={this.props.client.email}/>

                <InputField label="Contraseña" id="password" type="password" inputRef={this.password} />

                <div className="input-field col s12">
                    <button type="submit" className="btn btn-rised">
                        Guardar
                    </button>
                </div>
            </form>
        )
    }
}



export default Form