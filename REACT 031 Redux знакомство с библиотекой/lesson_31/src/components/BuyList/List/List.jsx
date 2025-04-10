
const List = ({items = [], deleteItem}) => {

    const elements = items.map(item => (
        <li key={item.id}>
            Тип: {item.type}.
            {item.name}.
            {item.urgency && "Срочно!"}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
    ))

    return (
        <div>
            <h4>List</h4>
            <ul>{elements}</ul>
        </div>
    )
};

export default List;