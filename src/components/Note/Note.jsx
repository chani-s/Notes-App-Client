// Note.jsx
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ColorBar from '../ColorBar/ColorBar';
import styles from './Note.module.css';

function Note({ id, text, color, onDelete, onEdit, onColoring }) {
  const [noteText, setNoteText] = useState(text);
  const [noteColor, setNoteColor] = useState(color);
  const [showColorBar, setShowColorBar] = useState(false);

  const handleEdit = (e) => {
    const newText = e.target.innerText;
    setNoteText(newText);
    onEdit(id, newText);
  };

  const handleColor = () => {
    setShowColorBar(!showColorBar);
  };

  const handleColorChange = (newColor) => {
    setNoteColor(newColor);
    setShowColorBar(false); 
    onColoring(id, newColor); 
  };

  return (
    <div className={styles.noteCard} style={{ backgroundColor: noteColor }}>
      <p contentEditable onBlur={handleEdit}>{noteText}</p>
      {!showColorBar && <div className={styles.buttonsBar}>
        <button className={styles.colorIcon} onClick={handleColor} style={{ backgroundColor: noteColor }}></button>
        <button onClick={() => onDelete(id)}><FaTrash /></button>
      </div>}
      {showColorBar && <ColorBar onColorSelect={handleColorChange} />}
    </div>
  );
}

export default Note;
