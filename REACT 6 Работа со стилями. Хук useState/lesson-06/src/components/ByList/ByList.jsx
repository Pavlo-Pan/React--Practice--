import { useState } from "react";

import initialState from "./items"

const ByList = () => {

    const [list, setList] = useState(initialState);

    const deleteListItem = name => {
        setList(prevList => {
            const newList = prevList.filter(item => item !== name);
            return newList;
        })
    }

    const elements = list.map(item => (
        <li key={item}>{item} <button onClick={() => deleteListItem(item)}>Delete</button></li>
    ));
    return (
        <ul>{elements}</ul>
    )
}

export default ByList;