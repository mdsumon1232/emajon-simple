import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,img,ratings,seller} = props.product
    return (
        <div className='product'>
            <img src={img} />
            <h6>{name}</h6>
            <p className='price'>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <p>Ratting : {ratings}</p>
            <button className='btn'>Add to Cart</button>
          
        </div>
    );
};

export default Product;