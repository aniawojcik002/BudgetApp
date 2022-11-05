import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { BsWalletFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

import styles from "./Modal.module.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper} onClick={(e) => {
        e.stopPropagation()}}>
          <div className={styles.modalHeader}>
            <AiOutlineArrowLeft />
            <p> Add Expense</p>
            <AiOutlineClose onClick={onClose} />
          </div>
          <div className={styles.spendingValue}>
            <input type="number"></input>
          </div>
          <div className={styles.bodyWrapper}>
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
                <input className={styles.calendar__input} type="date" />
              </div>
              <div>
                <button className={styles.doneButton}> Done! </button>
              </div>
            </div>
            <div className={styles.messengerRightContainer}>Photo or messenger</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
