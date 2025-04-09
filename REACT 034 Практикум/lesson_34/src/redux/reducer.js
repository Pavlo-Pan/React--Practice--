import { LOGIN, LOGOUT } from "./types";

const initialStore = {
    user: {},
    isAuthenticated: false,
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...store, user: action.payload, isAuthenticated: true }

        case LOGOUT:
            return {...store, user: {}, isAuthenticated: false,}
            
        default:
            return store
    }
};

export default reducer;