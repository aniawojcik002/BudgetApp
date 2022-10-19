// import styles from "./module.css";
import styles from "./Transactions.module.css";
import { Fragment } from "react";
import Header from "../Header/Header";
import TransactionData from "./TransactionData";

export const Transactions = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Header />
        </div>
        <div className={styles.transactionsWrapper}>
          <div className={styles.transactionsHeader}>
            <h1 className={styles.title}>Transaction</h1>
            <div className={styles.searchBox}>
              <input type="text"></input>
            </div>
            <div className={styles.calendarBox}>
              <input type="date"></input>
            </div>
            <button>Export as PDF</button>
          </div>
          <TransactionData />
        </div>
      </div>
    </>
  );
};
