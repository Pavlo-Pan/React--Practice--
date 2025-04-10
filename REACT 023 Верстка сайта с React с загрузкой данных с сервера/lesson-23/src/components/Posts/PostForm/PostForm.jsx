import { useId } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../Button/Button';

import { defaultValues } from './fields';

import styles from './PostForm.module.css';

const PostForm = ({ onAddPost }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues, })

    const titleId = useId();
    const textId = useId();

    const onSubmit = values => {
        onAddPost(values);

        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fieldBlock}>
                <label className={styles.label} htmlFor={titleId}>Заголовок поста:</label>
                <input {...register('title', { required: "Название поста нужно указать" })}
                    type="text" id={titleId} placeholder='Заголовок поста' className={styles.textField} />
                {errors.title && <p className={styles.error}>{errors.title.message}</p>}
            </div>
            <div className={styles.fieldBlock}>
                <label className={styles.label} htmlFor={textId}>Текст поста:</label>
                <input {...register('text', { required: "Текст поста нужно написать" })}
                    type="text" id={textId} placeholder='Текст поста' className={styles.textField} />
                {errors.text && <p className={styles.error}>{errors.text.message}</p>}
            </div>
            <div className={styles.btnWrapper}>
                <Button>Публикация</Button>
            </div>
        </form>
    )
};

export default PostForm;