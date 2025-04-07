import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../../api/products";
import { addToCartItem } from "../../redux/actionsCreators"


const Products = () => {

    const [products, setproducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                setLoading(true)
                const data = await getProducts();
                setproducts(data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        };
        fetchproducts();
    }, [])

    const handleClick = (item) => {
        const action = addToCartItem(item);
        dispatch(action);
    }

    const elements = products.map(item => (
        <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>description: {item.description}</p>
            <button onClick={() => handleClick(item)}>Buy</button>
        </li>
    ))

    return (
        <section>
            <h2>Products</h2>
            <ul>{elements}</ul>
        </section>
    )
};

export default Products;