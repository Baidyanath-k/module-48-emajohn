import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import'./Shops.css';

const Shops = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`products.json`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const [cart,setCart]=useState([]);
    const addToCardHandle=(product)=>{
        console.log(product);
        const newCart=[...cart,product];
        setCart(newCart);
    };
    return (
        <div className='main-shop-container'>
            <div className="shop-left-container">
                <div className="product-item">
                {
                    products.map(product=><Product 
                        product={product} 
                        key={product.id}
                        cardadd={addToCardHandle}
                    ></Product>)
                }
                </div>
                
            </div>
            <div className="shop-right-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;