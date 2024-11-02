// AddNote.jsx
import styles from './AddNote.module.css';
import { addNoteToServer } from '../../service/controller';

function AddNote({  setNotes}) {
  const colors = ['green', 'blue', 'purple', 'orange'];

  const handleAddNote = async () => {
    const newNote = {
      text: 'Text',
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    // שליחת הפתק החדש לשרת וקבלת הפתק השמור בחזרה
    const savedNote = await addNoteToServer(newNote);
    
    if (savedNote) { // ודא שהפתק נשמר בהצלחה
      // עדכון ה-state עם הפתק החדש
      setNotes(prevNotes => [...prevNotes, savedNote]);
    }
  };

  return (
    <div>
      <button className={styles.addButton} onClick={handleAddNote}>+</button>
    </div>
  );
}

export default AddNote;
