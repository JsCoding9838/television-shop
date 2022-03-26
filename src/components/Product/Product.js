import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product, handler}) => {
    // console.log(product);
    const {name, price, img} = product;
    return (
        
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                </div>
                <div className="">
                    <button onClick={()=> {handler(product)}} className="btn btn-info w-100">ADD TO CART <span><FontAwesomeIcon icon= {faShoppingCart}></FontAwesomeIcon></span> </button>

                </div>
            </div>
        </div>
        
    );
};

export default Product;