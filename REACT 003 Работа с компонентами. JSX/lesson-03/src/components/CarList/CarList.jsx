
import './CarList.css';

const CarList = () => {
    const cars = ['Mercedes', 'BMW', 'Audi', 'Porsche', 'Ferrari']

    return (
        <ul>
            {cars.map(car => (<li key={car}>{car}</li>))}
        </ul>
    )
};

export default CarList;