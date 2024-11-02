import React, { useState, useEffect } from 'react';
import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote';
import { fetchNotes, deleteNote, updateNoteText, updateNoteColor } from '../../service/controller';

import styles from './NoteList.module.css';

function NoteList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadNotes = async () => {
            const data = await fetchNotes();
            setNotes(data);
        };
        loadNotes();
    }, []);

    const handleDelete = async (id) => {
        await deleteNote(id);
        setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
    };

    const handleTextUpdate = async (id, newText) => {
        const updatedNote = await updateNoteText(id, { text: newText });
        setNotes((prevNotes) =>
            prevNotes.map(note => note.id === id ? updatedNote : note)
        );
    };

    const handleColorUpdate = async (id, newColor) => {
        const updatedNote = await updateNoteColor(id, { color: newColor });
        setNotes((prevNotes) =>
            prevNotes.map(note => note.id === id ? updatedNote : note)
        );
    };


    return (
        <div className={styles.notesContainer}>
            {notes.map(note => (
                <div key={note.id} className={styles.noteCard}>
                    <Note id={note.id} text={note.text} color={note.color}
                        onDelete={handleDelete} onEdit={handleTextUpdate}
                        onColoring={handleColorUpdate} />
                </div>
            ))}
            <div className={styles.noteCard}>
                <AddNote setNotes={setNotes} />
            </div>
        </div>
    );
}

export default NoteList;
