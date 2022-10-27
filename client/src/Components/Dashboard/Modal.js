import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { BsWalletFill} from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

import styles from "./Modal.module.css";

const Modal = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.modalHeader}>
          <AiOutlineArrowLeft />
          <p> Add Expense</p>
          <AiOutlineClose />
        </div>
        <div className={styles.input}>
          <input type="number"></input>
        </div>
        <div className={styles.bottomWrapper}>
          <div className={styles.leftSideContainer}>
            <div className={styles.wallet}>
              <BsWalletFill />
              <p>Wallet</p>
            </div>
            <div className={styles.category}>
              <BiCategory />
              <p>Category</p>
            </div>
            <div className={styles.calendar}>
              {/* <BsCalendarCheck /> */}
              <input className={styles.input} type="date"/>
            </div>
          <div >
            <button className={styles.doneButton}> Done! </button>
          </div>
          </div>
          <div className={styles.messenger}>Photo and messenger</div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
