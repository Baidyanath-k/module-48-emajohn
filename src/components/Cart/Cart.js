import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Selected Items: {cart.length}</h4>
        </div>
    );
};

export default Cart;