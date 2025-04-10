import { useId } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = ({ loginUser }) => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const loginId = useId();
    const emailId = useId();
    const passwordId = useId();

    const onSubmit = (values) => {
        loginUser(values)
        reset();
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor={loginId}>Login</label>
                <input {...register('login', {
                    required: "Введите логин",
                    minLength: { value: 6, message: "Логин должен быть больше 6 символов" }
                })}
                    type="text" id={loginId} placeholder="Login" />
                {errors.login && <p style={{ color: 'red' }}>{errors.login.message}</p>}
            </div>
            <div>
                <label htmlFor={emailId}>Email</label>
                <input {...register('email', {
                    required: "Введите почту",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "email должен быть правильного формата"
                    }
                })} type="text" id={emailId} placeholder="Email" />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor={passwordId}>Password</label>
                <input {...register('password', {
                    required: "Введите пароль",
                    minLength: { value: 8, message: "Пароль должен быть больше 8 символов" },
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Пароль должен содержать хотя бы однуа букву и цифру, минимум один специальный символ"
                    }
                })} type="password" id={passwordId} placeholder="Password" />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            <button>Регистрация</button>
        </form>
    );
};

export default RegistrationForm;