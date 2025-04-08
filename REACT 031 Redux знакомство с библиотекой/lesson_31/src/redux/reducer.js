import { nanoid } from "nanoid";

import { ADD_ITEM, DELETE_ITEM } from "./types";

const initialStore = {
    buyList: [
        {
            id: nanoid(),
            name: "Корм для котов",
            urgency: true,
            type: "food",
        },
        {
            id: nanoid(),
            name: "Стиральный порошок",
            urgency: false,
            type: "spend",
        },
    ],
    notes: [],
};

const reducer = (store = initialStore, action) => {

    switch (action.type) {
        case ADD_ITEM:
            return { ...store, buyList: [...store.buyList, action.payload] };
        case DELETE_ITEM:
            return { ...store, buyList: store.buyList.filter(item => item.id !== action.payload) };
        default:
            return store;
    }

};

export default reducer;

