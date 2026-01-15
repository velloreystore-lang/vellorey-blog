import { Link } from "react-router-dom";
import "./Navbar.css"; // optional styling

function ArticleCard({ article }) {
  return (
    <Link to={`/article/${article.id}`} className="card-link">
      <div className="card">
        <img src={article.cover} alt={article.title} className="card-img" />
        <div className="card-content">
          <h2>{article.title}</h2>
          <p className="meta">
            Published: {article.date} • {article.readingTime}
          </p>
          <p>{article.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
