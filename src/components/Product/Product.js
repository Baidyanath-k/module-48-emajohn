import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({product,cardadd}) => {
    // console.log(cardadd);
    const{img,name,price,ratings,seller}=product;
    return (
        <div className='products-varient'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h6>{name}</h6>
                <h5>Price: ${price}</h5>
                <p>Manufacture: {seller}</p>
                <h4>Rating: {ratings? ratings :"No rating"}</h4>
            </div>

            <div className="product-btn">
                <button onClick={()=>cardadd(product)}>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div> 
        </div>
    );
};

export default Product;