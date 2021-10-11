import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getTotalPrice} from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    // console.log(state);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal ({basket.length} items) : &nbsp;
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotalPrice(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                />

                <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
