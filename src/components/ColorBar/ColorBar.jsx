import React from "react";
import styles from "./ColorBar.module.css";

function ColorBar({ onColorSelect }) {
  return (
    <div className={styles.colorContainer}>
      <button className={`${styles.colorIcon} ${styles.c1}`} onClick={() => onColorSelect("#006D77")}></button>
      <button className={`${styles.colorIcon} ${styles.c2}`} onClick={() => onColorSelect("#83C5BE")}></button>
      <button className={`${styles.colorIcon} ${styles.c3}`} onClick={() => onColorSelect("#EDF6F9")}></button>
      <button className={`${styles.colorIcon} ${styles.c4}`} onClick={() => onColorSelect("#FFDDD2")}></button>
      <button className={`${styles.colorIcon} ${styles.c5}`} onClick={() => onColorSelect("#E29578")}></button>
    </div>
  );
}

export default ColorBar;
