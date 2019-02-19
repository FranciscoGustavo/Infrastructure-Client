import React, { Component } from 'react'
import InputField from '../Globals/Forms/InputField'



class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            cover : this.props.product.avatarImage || ''
        }
       
        this.categories =  this.props.categories.filter(e => e._id !== this.props.product._category._id)
    
        this.title = React.createRef()
        this.description = React.createRef()
        this.unity = React.createRef()
        this.price = React.createRef()
        this.category = React.createRef()

        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e){
        e.preventDefault()
        let data = {
            title : this.title.current.defaultValue,
            description : this.description.current.defaultValue,
            price : this.price.current.defaultValue,
            unity : this.unity.current.defaultValue,
            _category :this.category.current.value
        }

        this.props.save(data)
    }


    loadCategories(){
        return this.categories.map((e, i) => {
            return <option key={i} value={e._id}>{e.title}</option>
        })
    }

    render(){
        if(this.props.product){
            return(
                <form className="product-form" onSubmit={this.handleSubmit}>
                    <div className="avatar col s4">
                        <div 
                            className="avatar-image" 
                            style={
                                {backgroundImage: 'url(' + (this.state.cover) + ')'}
                            } 
                        ></div>
                        <input id="photo" type="file" className="validate" name="cover" ref={this.photo} onChange={this.handleChange}/>
                        <label htmlFor="photo" className="btn btn-outline">
                            Seleciona una Imagen
                            <i className="material-icons right">photo_camera</i>
                        </label>
                    </div>
                    
                    <div className="s8">
                        <InputField label="Titulo" id="title" type="text" inputRef={this.title} value={this.props.product.title}/>
                        <InputField label="Descripcion" id="title" type="text" inputRef={this.description} value={this.props.product.description}/>
                        <InputField label="Precio" id="title" type="text" inputRef={this.price} value={this.props.product.price}/>
                        <InputField label="Unidad" id="title" type="text" inputRef={this.unity} value={this.props.product.unity}/>
                    
                        <select ref={this.category}>
                            <option autoFocus={true} value={this.props.product._category._id}>{this.props.product._category.title}</option>
                            {this.loadCategories()}
                        </select>
                    </div>
                    
                    <div className="input-field col s12">
                        <button type="submit" className="btn btn-rised">
                            Guardar
                            <i className="material-icons right">photo_camera</i>
                        </button>
                    </div>
                
                </form>
            )
        } else {
            return(<h1>Cargando</h1>)
        }
    }
}



export default Form