import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getProducts } from '../../api/products'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get('page') || 1;
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const data = await getProducts({ page });
                setProducts(data);
                // setProducts(prevProds => [...prevProds, ...data]);

            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchProducts();
    }, [page])

    const elements = products.map(item => (
        <li key={item.id}> name:{item.name} , {item.description}</li>
    ))

    const onLoadMore = () => {
        setSearchParams({ page: Number(page) + 1 })
    }

    return (
        <div>
            <p>Страница: {page}</p>
            <ul>{elements}</ul>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <button onClick={onLoadMore}>Load more</button>
        </div>
    )
};

export default Products;