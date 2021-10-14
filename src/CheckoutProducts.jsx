import React from 'react';
import "./CheckoutProducts.css";
import { useStateValue } from './StateProvider';

function CheckoutProducts({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }

    return (
        <div className="checkoutProduct" key={id}>
            <div className="checkoutProduct__image">
                <img src={image} alt="" />
            </div>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>{
                        return <p>&#11088;</p>
                    })}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
