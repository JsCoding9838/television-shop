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
            title: "Can't Selected more than 4!",
            text: "Something went wrong",
            icon: "warning",
            confirmButtonText: "Close",
            });
        }
    };

    const choosenHandler = (products) => {
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const {name, price} = randomProduct;
        // console.log(randomProduct);
        if(randomProduct){
            Swal.fire({
                title: (`${name}`),
                text: (`Price: $ ${price}`),
                icon: "info",
                confirmButtonText: "Close",
            });
        }
    }

    const removedItems = () => {
        let cartDetails = [];
        setCart(cartDetails);
    }

    // console.log(cart);
    return (
        <>
            {/* <h1 className="text-success">Electronics Products</h1> */}
            <div className="shop-container mb-4 row">
                <div className="product-container col-md-9">
                    {/* <h2>Product Container</h2> */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(product => <Product handler= {handler} product={product} key={product.id}></Product>)
                        }
                    </div>
                </div>

                <div className="cart-container col-md-3">
                    <div className="mt-3 mb-4">
                        <h2 className="fw-bold">Cart Summary</h2>
                    </div>
                    
                    {
                        cart.map(product => <CartDetails product={product} key={product.id} />)
                    }
                
                    <div className='cart-btn d-grid gap-2 mx-auto mb-3'>
                        <button onClick={() => {choosenHandler(cart)}} className='btn-top btn btn-primary  w-75 mx-auto'>CHOOSE ONE FOR ME</button>
                        <button onClick={() => {removedItems()}}className='btn btn-danger w-75 mx-auto'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;