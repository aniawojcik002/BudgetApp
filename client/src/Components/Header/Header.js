import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/Dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/Transactions">
            Transactions
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
