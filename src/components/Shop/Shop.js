import React, { useEffect, useState } from 'react';
import CartDetails from '../CartDetails/CartDetails';
import Product from '../Product/Product';
import Swal from "sweetalert2";
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    

    const handler = (product) => {
        if (cart.length < 4) {
            const exist = cart.find(products => products.id === product.id)
            if(!exist) {
            const newCart = [...cart, product];
            setCart(newCart);
            }
            
        } else {
            Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "close",
            });
        }
    };

    const choosenHandler = (products) => {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const {name} = randomProduct;
        // console.log(randomProduct);
        if(randomProduct){
            Swal.fire({
                title: (`${name}`),
                text: "Do you want to continue",
                icon: "error",
                confirmButtonText: "close",
            });
        }
    }

    const removedItems = () => {
        
    }

    // console.log(cart);
    return (
        <>
            {/* <h1 className="text-success">Electronics Products</h1> */}
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
                    
                    {
                        cart.map(product => <CartDetails product={product} key={product.id} />)
                    }
                
                    <div className='cart-btn'>
                        <button onClick={() => {choosenHandler(cart)}} className='btn-top btn btn-primary'>Choose one</button>
                        <button onClick={() => {removedItems()}}className='btn btn-danger'>Removed</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;