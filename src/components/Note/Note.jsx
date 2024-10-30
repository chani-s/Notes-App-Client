import React from 'react';
import styles from './Note.module.css';

function Note({ id, text, color, onDelete, onEdit }) {
  return (
    <div className={styles.note} style={{ backgroundColor: color }}>
      <p contentEditable onBlur={onEdit}>{text}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default Note;