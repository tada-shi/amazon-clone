import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://m.media-amazon.com/images/I/61TtXhpPiHL._SX1500_.jpg" 
                alt="" 
                />
                <div className="home__row">
                    <Product
                    id="63736872"
                    title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging"
                    price={43.99}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/719ZywAmvOL._AC_UL450_SR450,320_.jpg"
                    />
                    <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk,
                    5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SX425_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="76878798"
                    title="American Tourister Casual Backpack"
                    price={20.56}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/91FvDEE9sCL._AC_UL450_SR450,320_.jpg"
                    />
                    <Product 
                    id="12312341"
                    title="Vega Crux Flip-up Helmet (Black, L)"
                    price={15.99}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/91Jg-E1tygL._AC_UL200_SR200,200_.jpg"
                    />
                    <Product
                    id="72638721"
                    title="TrustBasket Organic Vermicompost Fertilizer Manure for Plants - 5 KG"
                    price={12.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71iPA5LfB7L._SY450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="21878379"
                    title="Sukkhi Glamorous LCT Gold Plated Wedding Jewellery Pearl Choker Necklace Set Combo For Women (CB73381)"
                    price={299.00}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/912iX-Sve0L._AC_UL200_SR200,200_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
