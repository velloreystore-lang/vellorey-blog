import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import articles from "../data/articles.js";

function Article() {
  const { id } = useParams();          // get article id from URL
  const [content, setContent] = useState("");
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // find the article object by id
    const found = articles.find((a) => a.id === id);
    setArticle(found);

    // fetch the Markdown content asynchronously
    const fetchMarkdown = async () => {
      if (found) {
        try {
          const res = await fetch(found.file);
          if (!res.ok) throw new Error("Markdown file not found");
          const text = await res.text();
          setContent(text);
        } catch (err) {
          console.error(err);
          setContent("Failed to load article content.");
        }
      }
    };

    fetchMarkdown();
  }, [id]);

  if (!article) return <p>Article not found.</p>;

  return (
    <article className="article-page">
      {content ? <ReactMarkdown>{content}</ReactMarkdown> : <p>Loading...</p>}
    </article>
  );
}

export default Article;
