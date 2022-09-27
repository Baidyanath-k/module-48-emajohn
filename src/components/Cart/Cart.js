import React from 'react';
import'./Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
            <p>Total Price: $</p>
            <p>Total Shiping Charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;