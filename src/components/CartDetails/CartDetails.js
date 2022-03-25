import React, { useState } from 'react';

const  CartDetails = ({product}) => {

    // console.log(product);
    // const [cartItems, setCartItems] = useState([]);
    // let name = '';
    // if(product.length < 4) {
    //     for(const cart of product) {
    //         // console.log(cart.name);
    //         name = cart.name;
    //     }
    // }

    return (
        <div>
            <p><li>{product.name}</li></p>
        </div>
    );
};

export default CartDetails;