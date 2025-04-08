import { nanoid } from "nanoid";

import { ADD_ITEM, DELETE_ITEM } from "./types";

export const addItemByList = data => {
    return {
        type: ADD_ITEM,
        payload: {
            ...data,
            id: nanoid(),
        },
    }
};

export const deleteItemByList = payload =>{
    return {
        type: DELETE_ITEM,
        payload,
    }
}
