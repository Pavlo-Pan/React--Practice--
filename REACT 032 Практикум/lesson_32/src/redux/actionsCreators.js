
import { ADD_TO_CART } from './types'

export const addToCartItem = (payload) => {
    return {
        type: ADD_TO_CART,
        payload,
    }

};

