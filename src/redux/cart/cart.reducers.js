import CartAtionTypes from "./cart.types"
import CartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.utlities"
const initstate = {
    hidden:true,
    cartItems: []
}

const cartReducer = (state=initstate,action)=>{
    switch(action.type){
        case CartAtionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }
        default :
            return state;
    }
}

export default cartReducer