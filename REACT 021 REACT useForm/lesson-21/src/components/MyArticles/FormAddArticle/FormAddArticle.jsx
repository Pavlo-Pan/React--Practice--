
import { useForm } from "react-hook-form";

const FormAddArticle = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            description: '',
            type: ''
        }
    });

    const onSubmit = (values) => {
        console.log(values);
        reset();
    }

    const type = watch('type');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Title</label>
                <input {...register("title", { required: 'title is required' })}
                    type="text" id="title" placeholder="Title" />
                {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea {...register("description", { required: 'description is required' })}
                    type="text"
                    id="description"
                    placeholder="Description"
                >
                </textarea>
                {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select {...register("type", { required: 'type is required' })} id="type">
                    <option value="">Select type</option>
                    <option value="acticle">Article</option>
                    <option value="news">News</option>
                </select>
                {errors.type && <p style={{ color: 'red' }}>{errors.type.message}</p>}
            </div>
            {type === "news" && (
                <div>
                    <label htmlFor="date">Date</label>
                    <input {...register("date", { required: 'date is required' })}
                        type="date" id="date" placeholder="date" />
                    {errors.date && <p style={{ color: 'red' }}>{errors.date.message}</p>}
                </div>
            )}

            <button>Add</button>
        </form>
    )
};

export default FormAddArticle;