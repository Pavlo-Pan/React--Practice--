import './MenuItem.css';

const MenuItem = ({name, description, price}) => {
    return (
        <div className='menu-item'>
            <h3>{name}</h3>
            <p>Description: {description}</p>
            <p>Price: {price} Euro</p>
        </div>
    );
};

export default MenuItem;