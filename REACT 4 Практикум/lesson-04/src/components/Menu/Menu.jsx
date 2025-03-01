import MenuItem from './MenuItem/MenuItem';

import './Menu.css';

const Menu = ({items=[]})=> {
    const elements = items.map(item => <MenuItem key={item.id} name={item.name} description={item.description} price={item.price}  />)
    return (
        <div className='menu-wrap'>
            <h2>Menu</h2>
            <div className='menu-list'>{elements}</div>
        </div>
    );
};

export default Menu;