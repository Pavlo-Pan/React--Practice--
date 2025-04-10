import { useForm } from 'react-hook-form';
import { useId } from 'react';



import styles from './LoginForm.module.css';

const LoginForm = ({ submitForm }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const usernameId = useId();
    const userPasswordId = useId()

    const onSubmit = values => {
        submitForm(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <div>
                <label htmlFor={usernameId}>Username</label>
                <input {...register('username', { required: "Поле обязательно" })}
                    type="text" placeholder='Name' id={usernameId} />
                {errors.username && <p className={styles.error}>{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor={userPasswordId}>Password</label>
                <input {...register('password', { required: "Поле обязательно" })}
                    type="password" placeholder='Password' id={userPasswordId} />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <button>Login</button>
        </form>
    )
};

export default LoginForm;