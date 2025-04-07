import { useSelector } from "react-redux";

const Cart = () => {
    const items = useSelector(store => store.cart);

    const elements = items.map(item => (
        <li key={item.id}>
            {item.name} <button>Delete</button>
        </li>
    ))

    return (
        <section>
            <h2>Cart</h2>
            <ul>{elements}</ul>
        </section>
    )
};

export default Cart;