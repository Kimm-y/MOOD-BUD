import React, { useEffect, useState } from 'react';
import { fetchScrapedArticles } from '../src/Api';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const articles = await fetchScrapedArticles();
                setArticles(articles);
            } catch (error) {
                setError('Failed to fetch articles.');
            }
        };
        getArticles();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
            {articles.map((article) => (
                <div key={article.title}>
                    <h2>{article.title}</h2>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;

