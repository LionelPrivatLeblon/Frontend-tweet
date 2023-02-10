import { useSelector } from "react-redux";
import Head from "next/head";
import styles from "../styles/Content.module.css";
import Article from "./Article";
import { text } from "@fortawesome/fontawesome-svg-core";
import Post from "../components/Post";
import Tweet from "../components/Tweet";

function Contents() {
  const bookmarks = useSelector((state) => state.bookmarks.value);

  let articles = <p>No article</p>;
  if (bookmarks.length > 0) {
    articles = bookmarks.map((data, i) => {
      return <Article key={i} {...data} isBookmarked />;
    });
  }

  return (
    <div>
      <Head>
        <title>Morning News - Content</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div>Logo</div>
          <div>Logo2</div>
        </div>
        <div className={styles.col2}>
          <div className={styles.col2top}>
            <div>
              <h2 className={styles.title}>Hashtags</h2>
              <Post />
              <Tweet />
            </div>
          </div>
          <div className={styles.col2middle}>{articles}</div>
        </div>
        <div className={styles.col3}>
          <h2 className={styles.title}>Trends</h2>
        </div>
      </div>
    </div>
  );
}

export default Contents;
