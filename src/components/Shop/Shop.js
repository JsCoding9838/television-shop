import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    
    const handler = (product2) => {
        // console.log(product);
        let newArray  = [];
        const exits = products.find(product => product.id === product2.id);
        if(!exits){
            newArray.push(product2);
        }
        else{
            alert('already exsits')
        }
        setCart([...newArray, cart]);
    }

    // console.log(cart);
    return (
        <>
            <h1 className="text-success">Electronics Products</h1>
            <div className="shop-container row">
                <div className="product-container col-md-9 border border-danger">
                    {/* <h2>Product Container</h2> */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <Product handler= {handler} product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>

                <div className="cart-container col-md-3 border border-success">
                    <h1>Cart Summary</h1>
                    
                    <CartDetails product= {cart}></CartDetails>
                
                    <div className='cart-btn'>
                        <button className='btn-top btn btn-primary'>Shoose</button>
                        <button className='btn btn-danger'>Removed </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;