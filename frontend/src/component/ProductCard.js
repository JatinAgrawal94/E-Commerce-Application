import React from 'react';
// import image from '../images/type1/type1-1.jpg'
import {Rating} from './Rating';

export function ProductCard(props){
    const data=props;
    return(
        <div className="product-card">
            <div className='product-card-img'>
                <a href="/" target="_blank">
                    <img src={data.image} alt={data.name}/>
                </a>
            </div>
            <div className="product-card-detail">
                <p className="product-card-name"><a href="/">{data.name}</a></p>
                <p className="product-card-price">{`Rs ${data.price}`}</p>
                <Rating rating={data.rating} numReviews={data.numReviews}></Rating>
            </div>
        </div>
    );
}
