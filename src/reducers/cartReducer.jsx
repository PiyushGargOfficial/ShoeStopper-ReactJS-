import { CART_ITEMS } from "../actions/types"

const initialState = {
  cartItems: 0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
