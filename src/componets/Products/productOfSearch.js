import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
//import './product-of-search.css';

const productOfSearch = props => (
    <CSSTransition
        timeout={300}
        classNames="star"
        in={props.in}
    >
        <div className="product">
            <div className="md-col-2">
                <img src={props.image} alt=""/>
            </div>
            
            <div className="col-7 md-col-6 name">
                <h3>
                    {props.name}
                </h3>
            </div>

            <div className="col-3 md-col-2 price">
                <p>
                    {props.price}
                </p>
            </div>

            <div className="col-2 md-col-2">
                <button 
                    className="mdl-btn" 
                    onClick={() => props.addProduct(props.product) }
                >
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    </CSSTransition>
) 

export default productOfSearch