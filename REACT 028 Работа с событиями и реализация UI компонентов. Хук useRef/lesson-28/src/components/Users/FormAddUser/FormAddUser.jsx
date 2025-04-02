import { useId, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import userSchema from './user-schema';

import styles from './FormAddUser.module.css';

const FormAddUser = ({ onAddUser }) => {

    const usernameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const repeatPasswordId = useId();

    const inputRef = useRef();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema)
    });

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onSubmit = values => {
        console.log(values);
        onAddUser(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Create your account</h2>
            <div className={styles.group}>
                <label ref={inputRef} className={styles.label} htmlFor={usernameId}>Username</label>
                <input {...register("username")} className={styles.input} type="text" id={usernameId} placeholder='Username' />
                {errors.username && <p className={styles.errors}>{errors.username.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={emailId}>Email Address</label>
                <input {...register("email")} className={styles.input} type="email" id={emailId} placeholder='Email Address' />
                {errors.email && <p className={styles.errors}>{errors.email.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={passwordId}>Password</label>
                <input {...register("password")} className={styles.input} type="password" id={passwordId} placeholder='Password' />
                {errors.password && <p className={styles.errors}>{errors.password.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={repeatPasswordId}>Repeat password</label>
                <input {...register("repeatPassword")} className={styles.input} type="password" id={repeatPasswordId} placeholder='Repeat password' />
                {errors.repeatPassword && <p className={styles.errors}>{errors.repeatPassword.message}</p>}
            </div>
            <button className={styles.btn}>Sign up</button>
        </form>
    )
};

export default FormAddUser;