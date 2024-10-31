import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ColorBar from '../ColorBar/ColorBar'; // וודא שיבוא תקין של ColorBar
import styles from './Note.module.css';

function Note({ id, text, color, onDelete, onEdit }) {
  const [noteText, setNoteText] = useState(text);
  const [showColorBar, setShowColorBar] = useState(false); // משתנה מצב להצגת ColorBar

  const handleEdit = (e) => {
    const newText = e.target.innerText;
    setNoteText(newText);
    onEdit(id, newText);
  };

  const handleColor = () => {
    setShowColorBar(!showColorBar); // משנה את מצב הצגת ColorBar
  };

  return (
    <div className={styles.noteCard} style={{ backgroundColor: color }}>
      <p contentEditable onBlur={handleEdit}>{noteText}</p>
      {!showColorBar && <div className={styles.buttonsBar}>
        <button className={styles.colorIcon} onClick={handleColor}></button>
        <button onClick={() => onDelete(id)}><FaTrash /></button>
      </div>}
      {showColorBar && <ColorBar />}
    </div>
  );
}

export default Note;
