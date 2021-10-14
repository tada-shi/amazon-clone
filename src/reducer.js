import { act } from "react-dom/test-utils";

export const initialState = {
    basket:[]
};

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket, action.item]
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Can't remove product ${action.id} as its not in
                    basket`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state 
    }
};

export const getTotalPrice = (basket) => {
    const len = basket.length;
    // console.log(state.basket[0]);
    let sum=0;
    if(len){
        basket.map((_,i) => {
            sum+=basket[i].price;
            return sum;
        })
    }
    return sum;
    // basket?.reduce((amount, item) => amount + item, 0);
}

export default reducer;