import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product, handler}) => {
    const {name, price, img} = product;
    return (
        
        <div className="col cart-items">
            <div className="card h-100">
                <img src={img} className="card-img-top img-fluid w-100 h-100" alt="..."/>
                <div className="card-body">
                <h5 className="card-title fw-bold">{name.slice(0, 80)}</h5>
                    <p className="card-text fw-bold">Price: ${price}</p>
                </div>
                <div className="d-grid w-75 mx-auto">
                    <button onClick={()=> {handler(product)}} className="btn btn-outline-primary w-100 fw-bold fs-5">ADD TO CART <span className='ms-2 fs-5'><FontAwesomeIcon icon= {faShoppingCart}></FontAwesomeIcon></span> </button>

                </div>
            </div>
        </div>
        
    );
};

export default Product;