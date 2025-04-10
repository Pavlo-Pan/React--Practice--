

import styles from './TodoItem.module.css';

const TodoItem = ({title, deleteTodo})=> {

    const deleteitem = ()=>{
        deleteTodo(title)
    }

    return (
        <li>
            <input type="checkbox" />
            <p>{title}</p>
            <button onClick={deleteitem}>Delete</button>
        </li>
    )
};

export default TodoItem;