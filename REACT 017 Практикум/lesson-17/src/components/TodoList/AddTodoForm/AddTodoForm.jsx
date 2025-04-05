import { useState } from 'react';

import styles from './AddTodoForm.module.css';

const AddTodoForm = ({ onSubmit }) => {

    const [values, setValues] = useState({ title: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(values);
        setValues({title: ''});
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name='title' value={values.title} placeholder='Add a new task' required />
            <button>Add Todo</button>
        </form>
    )
};

export default AddTodoForm;