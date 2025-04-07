
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainMenu = ()=>{

    const count = useSelector(store => store.cart.length);

    return (
        <nav>
            <Link to='/'>LOGO</Link>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
            </ul>
            <p>Products in Cart: {count}</p>
        </nav>
    )
};

export default MainMenu;