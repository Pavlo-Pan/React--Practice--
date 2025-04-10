import './DestinationStats.css';

const DestinationStats = ({popularity, accessibility, climate, timeofday}) => {
    return (
        <div>
            <p>Рейтинг: {popularity}</p>
            <p>Доступность: {accessibility}</p>
            <p>Климат: {climate}</p>
            <p>timeofday: {timeofday}</p>
        </div>
    );
};

export default DestinationStats;