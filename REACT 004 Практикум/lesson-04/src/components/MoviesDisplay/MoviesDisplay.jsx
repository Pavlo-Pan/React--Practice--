import MovieCard from './MovieCard/MovieCard';

import './MoviesDisplay.css';

const MoviesDisplay = ({ items = [] }) => {

    const elements = items.map(item => <MovieCard key={item.id} title={item.title} year={item.year} />)
    return (
        <div className='movies-display'>
        <h2>Films Lists</h2>
        <ul className='movies-display-list'>{elements}</ul>
        </div>
    );
};

export default MoviesDisplay;