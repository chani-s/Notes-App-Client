// ColorBar.jsx
import React from "react";
import styles from "./ColorBar.module.css";

function ColorBar({ onColorSelect }) {
  return (
    <div className={styles.colorContainer}>
      <button className={`${styles.colorIcon} ${styles.red}`} onClick={() => onColorSelect("red")}></button>
      <button className={`${styles.colorIcon} ${styles.blue}`} onClick={() => onColorSelect("blue")}></button>
      <button className={`${styles.colorIcon} ${styles.green}`} onClick={() => onColorSelect("green")}></button>
      <button className={`${styles.colorIcon} ${styles.orange}`} onClick={() => onColorSelect("orange")}></button>
    </div>
  );
}

export default ColorBar;
