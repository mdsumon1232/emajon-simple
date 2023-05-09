import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let ship = 0;
     for( const product of cart){
        total = total + product.price;
        ship = ship+product.shipping;
    }
    const tax = total*8/100;
    return (
        <div className='cart-container'>
            <h1>Testing cart</h1>
                <h4>product:{cart.length}</h4>
            <h5 className='cart-tittle'>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:{total} </p>
            <p>Total Shipping Charge:{ship}</p>
            <p>Tax:{tax} </p>
        </div>
    );
};

export default Cart;