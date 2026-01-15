import { Link } from "react-router-dom";
import articles from "../data/articles.js";
import ArticleCard from '..//MyComponets/ArticleCard.jsx';
import Navbar from '..//MyComponets/Navbar.jsx';
import Footer from '..//MyComponets/footer.jsx';

function Home() {
  return (
    <>
    <Navbar />
    <main>
    <div className="home-container">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
    </main>
    <Footer />
    </>
  );
}

export default Home;