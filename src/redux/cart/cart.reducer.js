import {TOGGLE_CART_HIDDEN,ADD_ITEM,REMOVE_ITEM_FROM_CART,
        INCREASING_QUANTITY,DECREASING_QUANTITY} from "./cart.types";
import {addItemToCart,removeItemFromCart,increasingQuantityReducer,decreasingQuantityReducer} from "./cart.utils";


const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }

            case REMOVE_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems,action.payload)
                }
            case INCREASING_QUANTITY:
                return {
                     ...state,
                    cartItems: increasingQuantityReducer(state.cartItems,action.payload)
                }

            case DECREASING_QUANTITY:
                return {
                    ...state,
                    cartItems: decreasingQuantityReducer(state.cartItems,action.payload)
                }

        default : return  state
    }
}

export default cartReducer