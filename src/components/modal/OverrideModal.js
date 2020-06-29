import React from "react";
import ModalWithoutConfirm from "./ModalWithoutConfirm";
import styles from "./OverrideModal.module.css";

function OverrideModal(props) {
  const { duplicateFiles, onClose: handleClose, onClick: handleClick } = props;
  return (
    <ModalWithoutConfirm
      visible={duplicateFiles.length ? true : false}
      title="覆盖或跳过文件"
      onClose={handleClose}
    >
      <p
        className={styles.info}
      >{`目标包含${duplicateFiles.length}个已打标签文件`}</p>
      <ul className={styles.ul}>
        <li onClick={()=>handleClick('overrideAll')}>覆盖所有目标中的文件</li>
        <li onClick={()=>handleClick('skipAll')}>跳过这些文件</li>
        <li onClick={()=>handleClick('every')}>让我决定每个文件</li>
      </ul>
    </ModalWithoutConfirm>
  );
}

export default OverrideModal;

