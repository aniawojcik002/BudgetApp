import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link className={styles.navLink} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/D}shboard">Dashboard</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/T}ansactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
