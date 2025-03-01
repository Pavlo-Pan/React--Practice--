import './TrainRoute.css';

const TrainRoute = ({ trainName, startStation, endStation, departureTime, arrivalTime, price }) => {
    return (
        <li className='train-route-item'>
            <h3>Маршрут: {trainName}</h3>
            <p>Начальныя станция: {startStation}</p>
            <p>Конечная станция: {endStation}</p>
            <p>Время отправления: {departureTime}</p>
            <p>Время прибытия: {arrivalTime}</p>
            <p>Цена билета: {price} Euro</p>
        </li>
    );
};

export default TrainRoute;