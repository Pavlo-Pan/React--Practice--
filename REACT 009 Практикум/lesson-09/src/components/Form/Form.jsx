import { useState } from "react";

const Form = ({ onSubmit }) => {

    const [newColor, setNewColor] = useState('');

    const handleChange = (event) => {
        // console.log(event.target.value);
        setNewColor(event.target.value);
        // console.log(newColor);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(newColor);
        onSubmit(newColor);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="color" onChange={handleChange} />
            <button>Change</button>
        </form>
    )
};

export default Form;