// controller.jsx
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/notes';

export const fetchNotes = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch notes:', error);
        return [];
    }
};

export const addNoteToServer = async (note) => {
    try {
        const response = await axios.post(`${BASE_URL}/add`, note, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add note:', error);
        return null; 
    }
};

export const deleteNote = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/delete/${id}`);
        return id;
    } catch (error) {
        console.error('Failed to delete note:', error);
    }
};

export const updateNoteText = async (id, updatedNote) => {
    try {
        const response = await axios.put(`${BASE_URL}/text/${id}`, updatedNote, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update note:', error);
    }
};

export const updateNoteColor = async (id, updatedNote) => {
    try {
        const response = await axios.put(`${BASE_URL}/color/${id}`, updatedNote, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update note:', error);
    }
};
