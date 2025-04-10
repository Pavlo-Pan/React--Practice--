import Pokemon from './Pokemon/Pokemon';

import './PokemonList.css';

const PokemonList = ({ items = [] }) => {
    const elements = items.map(item => <Pokemon key={item.id} name={item.name} type={item.type} />);
    return (
        <div className='pokemon-container'>
            <h2>Pokemon List</h2>
            <ul className='pokemon-list'>{elements}</ul>
        </div>
    );
};

export default PokemonList;