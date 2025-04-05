import { useState } from "react";

import items from "./todoitems";

const ToDoList = ()=> {

    const [toDoItems, setToDoItems] = useState(items);

    const deleteItem = event => {
        if(event.target.tagName === "BUTTON") {
          const {index} = event.target.dataset;
          const normalizedIndex = Number(index);
          setToDoItems(prevState => prevState.filter((_, idx)=> idx !== normalizedIndex));
        }
      }
    
      const elements = toDoItems.map((item, index) => (
        <li key={index}>
            {item}
            <button data-index={index}>Delete</button>
        </li>
      ));

    return (
        <ul onClick={deleteItem}>{elements}</ul>
    )
};

export default ToDoList;