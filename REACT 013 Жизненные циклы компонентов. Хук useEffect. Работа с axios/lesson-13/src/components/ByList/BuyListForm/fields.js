export const options = [
    {
        value: "food",
        text: "Еда",
    },
    {
        value: "spend",
        text: "Повседневные расходы"
    }
];

export const initialState = {
    name: "",
    urgency: false,
    type: "food" // не показывает "еда" при обнулении, тип присваивает, но не меняет текст
};