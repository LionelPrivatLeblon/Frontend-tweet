import { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import Moment from "react-moment";
import { Modal } from "antd";
import Link from "next/link";

function Welcome() {
  const [date, setDate] = useState("2050-11-22T23:59:59");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setDate(new Date());
  }, []);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const modalContent = (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
        <p>Sign-up</p>
        <input type="text" placeholder="Username" id="signUpUsername" />
        <input type="password" placeholder="Password" id="signUpPassword" />
        <button id="register">Register</button>
      </div>
      <div className={styles.registerSection}>
        <p>Sign-in</p>
        <input type="text" placeholder="Username" id="signInUsername" />
        <input type="password" placeholder="Password" id="signInPassword" />
        <button id="connection">Connect</button>
      </div>
    </div>
  );

  let userSection;
  if (isModalVisible) {
    userSection = (
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => showModal()}
        className={styles.userSection}
      />
    );
  } else {
    userSection = (
      <FontAwesomeIcon
        icon={faUser}
        onClick={() => showModal()}
        className={styles.userSection}
      />
    );
  }

  return (
    <div className={styles.accueil}>
      <div className={styles.blocleft}></div>
      <div className={styles.blocright}>
        <div className={styles.blocwelcome}>
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>
          <div className={styles.btsignup}></div>
          <p>Already have an account?</p>
          <div className={styles.btsignin}></div>
        </div>
      </div>

      {isModalVisible && (
        <div id="react-modals">
          <Modal
            getContainer="#react-modals"
            className={styles.modal}
            visible={isModalVisible}
            closable={false}
            footer={null}
          >
            {modalContent}
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Welcome;
