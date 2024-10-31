import styles from './AddNote.module.css'

function AddNote({notes, setNotes}) {
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
    <div >
      <button className={styles.addButton} onClick={handleAddNote}>+</button>
    </div>
  );
}

export default AddNote;