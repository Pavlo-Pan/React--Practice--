import { useState } from "react";

const initialValus = {
    email: '',
    password: '',
    gender: "male",
};

const RegisterForm = () => {

    const [values, setValues] = useState({ ...initialValus });


    const onSubmit = (event) => {
        event.preventDefault();
        if (values.password.length < 6) {
            return alert("Password must contains at least 6 symbols")
        }
        console.log(values);
        setValues({ ...initialValus })
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setValues(prevValues => {
            const newValues = {
                ...prevValues,
                [name]: value,
            }
            return newValues;
        });
    }


    return (
        <form onSubmit={onSubmit}>
            <input value={values.email} onChange={handleChange} type="email" name="email" placeholder="User email" required />
            <input value={values.password} onChange={handleChange} type="password" name="password" placeholder="User password" required />
            <select value={values.gender} onChange={handleChange} name="gender" id="">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button>Регистрация</button>
        </form>
    )
};

export default RegisterForm;