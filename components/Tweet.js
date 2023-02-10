import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "../styles/Tweet.module.css";
import { useDispatch } from "react-redux";
import { displayTweet, removeTweet } from "../reducers/tweets";

function Tweet(props) {
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch();

  const handleRemoveTweet = () => {
    dispatch(removeTweet(props));
  };

  // like Tweet
  const handleLikeTweet = () => {
    setLikeCount(likeCount + 1);
  };
  let likeIconStyle = { cursor: "pointer", color: "white" };
  if (likeCount > 0) {
    likeIconStyle = { color: "#e74c3c", cursor: "pointer" };
  }
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
        <h2 className={styles.username}>{props.username}Aina</h2>
        <h3 className={styles.forname}>
          {props.username}@Aina94 <span className={styles.time}> - 35 sec</span>
        </h3>
      </div>
      <div className={styles.tweetContain}>
        <h3 ClassName={styles.tweety}>
          Tweet blablablabla<span className={styles.hashtag}> #exemple</span>
        </h3>
      </div>
      <div className={styles.liketrash}>
        <span>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => handleLikeTweet()}
            style={likeIconStyle}
            className="like"
          />{" "}
          <span className={styles.likeCount}> ({likeCount})</span>
        </span>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleRemoveTweet()}
          className={styles.trashIcon}
        />
      </div>
    </div>
  );
}

export default Tweet;
