
import React, { useEffect, useState } from 'react';
import { fetchArticles } from './Api';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const articles = await fetchArticles();
            setArticles(articles);
        };
        getArticles();
    }, []);

    return (
        <div>
            {articles.map((article) => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
