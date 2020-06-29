import React from "react";
import Modal from "react-awesome-modal";
import styles from "./ModalWithoutConfirm.module.css";

function ModalWithoutConfirm(props) {
  const { visible, title, onClose: handleClose, children } = props;
  return (
    <Modal visible={visible} effect="fadeInUp" onClose={handleClose}>
      <div className={styles.modal}>
        <p className={styles.title}>
          {title}
          <button onClick={handleClose}>X</button>
        </p>
        {children}
      </div>
    </Modal>
  );
}
export default ModalWithoutConfirm;
