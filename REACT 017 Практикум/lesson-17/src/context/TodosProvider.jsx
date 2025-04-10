import { useState, createContext } from "react";

export const todosContext = createContext([]);

const TodosProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const addTodo = (newTask) => {
        setItems(prevItems => [...prevItems, newTask]);
    }

    const deleteTodo = (title) => {
        setItems(prevItems => prevItems.filter(element => element.title !== title))
    }

    return (
        <todosContext.Provider value={{ items, addTodo, deleteTodo }}>
            {children}
        </todosContext.Provider>
    )
};

export default TodosProvider;