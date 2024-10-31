import React from "react";
import styles from "./ColorBar.module.css"

function ColorBar() {
const changeColor = (color) => {


}

    return (
        <div className={styles.colorContainer}>
            <button className={`${styles.colorIcon} ${styles.red}`} onClick={() => changeColor("red")}></button>
            <button className={`${styles.colorIcon} ${styles.blue}`}onClick={() => changeColor("blue")}></button>
            <button className={`${styles.colorIcon} ${styles.yellow}`} onClick={() => changeColor("yellow")}></button>
            <button className={`${styles.colorIcon} ${styles.pink}`} onClick={() => changeColor("pink")}></button>
        </div>

    );
}

export default ColorBar;