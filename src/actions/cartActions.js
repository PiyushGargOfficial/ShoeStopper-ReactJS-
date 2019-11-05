import {
    CART_ITEMS
} from './types';

export const cartItem = () => (dispatch, getState) => {
    dispatch({
        type: CART_ITEMS,
        payload: 'hello'
    })
}