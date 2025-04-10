import { useForm } from "react-hook-form";

import styles from './PostsSearchForm.module.css';

const PostsSearchForm = ({ onSearch }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = values => {
        onSearch(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input {...register("q", { required: "Search text required" })}
                type="text" placeholder="Search text" className={styles.input} />
            <button type="submit" className={styles.btn}>Start search</button>
            {errors.q && <p className={styles.error}>{errors.q.message}</p>}
        </form>
    )
};

export default PostsSearchForm;