import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://67e3b7b72ae442db76d13e71.mockapi.io/api/posts"
})

export const getPosts = async ({ page = 1, limit = 5 }) => {
    const { data } = await postsInstance.get("/", {
        params: {
            page,
            limit
        }
    });

    return data;
}

export const addPost = async newPost => {
    const {data} = await postsInstance.post('/', newPost);

    return data;
}

export const deletePost = async id =>{
    const {data} = await postsInstance.delete(`/${id}`);

    return data;
}