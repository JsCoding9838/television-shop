// import React, { useState } from 'react';
import './CartDetails.css'

const  CartDetails = ({product}) => {

    // console.log(product);

    const {name} = product;

    // const [cartItems, setCartItems] = useState([]);
    // let name = '';
    // if(product.length < 4) {
    //     for(const cart of product) {
    //         // console.log(cart.name);
    //         name = cart.name;
    //     }
    // }

    return (
        <div className='cart-items-area'>
            <p className='cart-text fw-bold'><li>{name}</li></p>
        </div>
    );
};

export default CartDetails;