import { useEffect, useState } from "react";
import Head from "next/head";
import Article from "./Article";
import TopArticle from "./TopArticle";
import styles from "../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [articlesData, setArticlesData] = useState([]);
  const [topArticle, setTopArticle] = useState({});

  /*useEffect(() => {
    fetch("http://localhost:3000/articles")
      .then((response) => response.json())
      .then((data) => {
        setTopArticle(data.articles[0]);
        setArticlesData(data.articles.filter((data, i) => i > 0));
      });
  }, []);*/
  useEffect(() => {}, []);

  const articles = articlesData.map((data, i) => {
    const isbookmarked = bookmarks.some(
      (bookmark) => bookmark.title === data.title
    );
    return <Article key={i} {...data} isbookmarked={isbookmarked} />;
  });

  return (
    <div>
      <Head>
        <title>Hacktweet</title>
      </Head>

      <TopArticle {...topArticle} />

      <div className={styles.articlesContainer}>{articles}</div>
    </div>
  );
}

export default Home;
