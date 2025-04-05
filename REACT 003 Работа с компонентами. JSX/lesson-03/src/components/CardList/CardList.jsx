import Card from "./Card/Card"

import './CardList.css';

const CardList = ({ items = [] }) => {
    if (!items?.length) {
        return <p>Товары не найдены</p>
    }
    const elements = items.map((item) => (
        <Card key={item.id} {...item} />
    ));

    return <div className="card-list">{elements}</div>;
};

export default CardList;