import { useForm } from "react-hook-form";
import { useId } from "react";

import { defaultValues, options } from "./fields";

import styles from './BuyListForm.module.css';

const BuyListForm = ({ submitForm }) => {

    const nameId = useId();
    const urgencyId = useId();
    const selectId = useId();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues });

    const onSubmit = values => {
        submitForm(values)
        reset();
    };

    const optionsElements = options.map((item) => (
        <option key={item.value} value={item.value}>
            {item.text}
        </option>
    ));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Form</h4>
            <div>
                <label htmlFor={nameId}>Название покупки</label>
                <input {...register("name", { required: "Поле обязательное" })}
                    type="text" placeholder="Название покупки" id={nameId} />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor={urgencyId}>Срочная покупка</label>
                <input {...register("urgency")} type="checkbox" id={urgencyId} />
            </div>
            <div>
                <select {...register("type")} id={selectId}>
                    {optionsElements}
                </select>
            </div>
            <div>
                <button>Добавить покупку</button>
            </div>

        </form>
    );
};

export default BuyListForm;