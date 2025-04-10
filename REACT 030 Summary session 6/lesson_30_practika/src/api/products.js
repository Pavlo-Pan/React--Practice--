import axios from "axios"

const productsInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products"
});

export const getProducts = async ({ page, limit = 10 }) => {
    const { data } = await productsInstance.get("/", {
        params: {
            page,
            limit
        }
    });
    return data;
}