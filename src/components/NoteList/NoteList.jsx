import React, { useState, useEffect } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';

import styles from './NoteList.module.css'

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const response = await fetch('http://localhost:8080/api/notes'); // החלף את הכתובת לפי ה-endpoint שלך
            const data = await response.json();
            setNotes(data);
        };

        fetchNotes();
    }, []);


    return (
        <div className={styles.notesContainer}>
            <div className={styles.noteCard}>
                <AddNote notes={notes} setNotes={setNotes} />
                </div>

            {notes.map(note => (
                <div className={styles.noteCard}>
                    <Note key={note.id} text={note.text} color={note.color} />
                </div>
            ))}
        </div>
    );
}

export default NoteList;