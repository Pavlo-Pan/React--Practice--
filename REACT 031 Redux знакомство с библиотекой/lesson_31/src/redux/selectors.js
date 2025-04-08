import { createSelector } from "reselect";

const selectBuyList = state => state.buyList;

export const selectUrgencyBuyList = createSelector(
    [selectBuyList],
    buyList => buyList.filter(item => item.urgency)
);