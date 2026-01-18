import { Link } from "react-router-dom";
import articles from "../data/articles.js";
import ArticleCard from '..//MyComponets/ArticleCard.jsx';
import Navbar from '..//MyComponets/Navbar.jsx';
import Footer from '..//MyComponets/footer.jsx';
import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  const [articleContents, setArticleContents] = useState({});

  useEffect(() => {
    articles.forEach((article) => {
      fetch(article.file)
        .then((res) => {
          if (!res.ok) throw new Error("File not found: " + article.file);
          return res.text();
        })
        .then((text) => {
          setArticleContents((prev) => ({ ...prev, [article.id]: text }));
        })
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <>
      {articles.map((article) => (
        <Helmet key={article.id}>
          <title>{article.title}</title>
          <meta name="description" content={article.excerpt} />
        </Helmet>))}
      <Navbar />
      <main>
        <div className="home-container">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              content={articleContents[article.id]} // pass fetched markdown
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;