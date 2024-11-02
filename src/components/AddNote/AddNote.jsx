import styles from './AddNote.module.css';
import { addNoteToServer } from '../../service/controller';


function AddNote({  setNotes}) {
  const colors = ['#006D77', '#83C5BE', '#FFDDD2', '#E29578'];

  const handleAddNote = async () => {
    const newNote = {
      text: 'Click to edit',
      color: colors[Math.floor(Math.random() * colors.length)]
    };

    const savedNote = await addNoteToServer(newNote);
    
    if (savedNote) { 
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
