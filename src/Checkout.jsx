import React from 'react';
import "./Checkout.css"
import Product from './Product';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" 
                alt=""
                />
                <div className="checkout__title">
                    Your shopping Basket

                    {basket?.map((_,i)=>{
                        const {id, title, image, rating, price} = basket[i];
                        return <Product
                                id={id}
                                title={title}
                                image={image}
                                price={price}
                                rating={rating}
                                />
                    })}
                    {/* basket__item */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
