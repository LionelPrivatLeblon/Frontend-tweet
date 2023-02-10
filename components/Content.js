import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import { login, logout } from "../reducers/user";
import styles from "../styles/Content.module.css";
import Article from "./Article";
import { text } from "@fortawesome/fontawesome-svg-core";
import Post from "../components/Post";
import Tweet from "../components/Tweet";

function Contents() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleLogout = () => {
    dispatch(logout());
    window.location.replace("/");
  };

  let articles = <p>No article</p>;
  if (bookmarks.length > 0) {
    articles = bookmarks.map((data, i) => {
      return <Article key={i} {...data} isBookmarked />;
    });
  }

  let userSection;
  if (user.token) {
    userSection = (
      <div className={styles.logoutSection}>
        <p>{user.username}</p>
        <p>
          @{user.username}
          {user.forname}
        </p>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Morning News - Content</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div>Logo</div>
          <div>{userSection}</div>
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
