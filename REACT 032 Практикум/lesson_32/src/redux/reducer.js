
import { ADD_TO_CART } from "./types";

const initialStore = {
    cart: [],
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            return {...store, cart: [...store.cart, action.payload]}
    
        default:
            return store;
    }
};

export default reducer;