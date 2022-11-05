import Header from "../Header/Header";
import styles from "./Dashboard.module.css";
import Modal from "./Modal";
import { useState } from "react";

export const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
  }
  const onCloseHandle = () => {
    setOpenModal(false)
  }
  return (
    <>
      <div className={styles.dashboardPageWrapper}>
        <Header />
        <div>
          <h1>Dashboard</h1>
          <div className={styles.transactionsHeader}>
            <div className={styles.searchBox}>
              <input type="text"></input>
            </div>
            <div className={styles.calendarBox}>
              <input type="date"></input>
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={handleModal}>Add spending</button>
            <Modal open={openModal} onClose={onCloseHandle}/>
            <button>Delete spending</button>
          </div>
        </div>
      </div>
    </>
  );
};
