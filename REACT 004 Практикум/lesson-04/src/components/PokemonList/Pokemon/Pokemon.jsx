import './Pokemon.css';

const Pokemon = ({ name, type }) => {
    return (
        <li className='pokemon-item'>
            <p>Pokemon {name}.</p>
            <p>Type {type}</p>
        </li>
    );
};

export default Pokemon;