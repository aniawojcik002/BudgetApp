import Header from "../Header/Header";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
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
            <button>Add spending</button>
            <button>Delete spending</button>
          </div>
        </div>
      </div>
    </>
  );
};
