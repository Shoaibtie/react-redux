import { ADD_TO_CART, REMOVE_FROM_CART ,All_REMOVE_FROM_CART } from "./constants";


const initialState = {
  cartItems: [],
}

const cartItemsReducer = (state = initialState, action) => {
  console.log(state);

switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems,action.payload]
      }
    case REMOVE_FROM_CART:
      return {
                ...state,
        cartItems:[...state.cartItems.filter((item,index) => index !== state.cartItems.findIndex(x=>x.ItemId==action.payload.ItemId) )]
              }
    case All_REMOVE_FROM_CART:
      return {
           
        cartItems:[]
              }
    default:
      return state
  }

}

export default cartItemsReducer