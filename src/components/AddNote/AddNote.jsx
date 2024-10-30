import React, { useState } from 'react';

function AddNote() {
  const [notes, setNotes] = useState([]);
  const colors = ['green', 'blue', 'purple', 'orange'];

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      text: 'Text',
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      {/* ... שאר הרכיבים שלך */}
      <button onClick={handleAddNote}>+</button>
    </div>
  );
}

export default AddNote;