import { useContext } from 'react';
import {todosContext} from '../../context/TodosProvider';

import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoItem from './TodoItem/TodoItem';

import styles from './TodoList.module.css';

const TodoList = () => {

    const {items, addTodo, deleteTodo} = useContext(todosContext);

    const elements = items.map(item => <TodoItem key={item.title}  title={item.title} deleteTodo={deleteTodo}/>)

    return (
        <>
            <h2>My Todo List</h2>
            <AddTodoForm onSubmit={addTodo} />
            <ul>
                {elements}
            </ul>
        </>
    )
};

export default TodoList;