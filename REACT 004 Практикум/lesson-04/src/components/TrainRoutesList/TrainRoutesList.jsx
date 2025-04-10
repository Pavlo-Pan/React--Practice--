import TrainRoute from './TrainRoute/TrainRoute';

import './TrainRoutesList.css';

const TrainRoutesList = ({ items = [] }) => {
    const elements = items.map(item => <TrainRoute key={item.id} {...item} />);

    return (
        <div className='train-routes'>
            <h2>Train Routes List</h2>
            <ul className='train-routes-list'>{elements}</ul>
        </div>
    );
};

export default TrainRoutesList;