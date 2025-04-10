import './MovieCard.css';

const MovieCard = ({title, year}) => {
    return (
        <li className='movie-card'>Name {title}, Year {year}</li>
    );
};

export default MovieCard;