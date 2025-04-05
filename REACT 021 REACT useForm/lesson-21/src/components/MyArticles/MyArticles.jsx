
import FormAddArticle from "./FormAddArticle/FormAddArticle";


const MyArticles = () => {
    return (
        <div>
            <h1>My Articles</h1>
            <FormAddArticle />
            <ul id="article-list"></ul>
        </div>
    )
};

export default MyArticles;