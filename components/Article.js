import Image from "next/image";
import styles from "../styles/Article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { addNumberToStore, reduceNumberToStore } from "../reducers/counter";
import { addBookmarksToStore } from "../reducers/bookmark";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Article(props) {
  const dispatch = useDispatch();

  const addNumber = () => {
    dispatch(addNumberToStore(props));
    console.log("count " + props);
  };

  const reduceNumber = () => {
    dispatch(reduceNumberToStore(props));
    console.log(props);
  };

  const addBookmarks = () => {
    dispatch(addBookmarksToStore(props));
    console.log(props);
  };

  const counts = useSelector((state) => state.counter.value);

  const [likedBookmarks, setlikedBookmarks] = useState([]);

  return (
    <div className={styles.articles}>
      <button
        className={styles.decrementBtn}
        id="decrementBtn"
        onClick={() => reduceNumber()}
      >
        -
      </button>
      <span className={styles.counter}>{counts}</span>
      <button
        className={styles.incrementBtn}
        id="incrementBtn"
        onClick={() => addNumber()}
      >
        +
      </button>
      <div className={styles.articleHeader}>
        <h3>{props.title}</h3>
        <FontAwesomeIcon
          icon={faBookmark}
          className={styles.bookmarkIcon}
          onClick={() => addBookmarks()}
        />
      </div>
      <h4 style={{ textAlign: "right" }}>- {props.author}</h4>
      <div className={styles.divider}></div>
      <Image
        src={props.urlToImage}
        alt={props.title}
        width={600}
        height={314}
      />
      <p>{props.description}</p>
    </div>
  );
}

export default Article;
