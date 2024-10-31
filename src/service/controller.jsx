// controller.jsx
export const fetchNotes = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/notes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch notes:', error);
        return [];
    }
};

export const deleteNote = async (id) => {
    try {
        await fetch(`http://localhost:8080/api/notes/${id}`, { method: 'DELETE' });
        return id;
    } catch (error) {
        console.error('Failed to delete note:', error);
    }
};

export const updateNote = async (id, updatedNote) => {
    try {
        const response = await fetch(`http://localhost:8080/api/notes/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedNote),
        });
        return await response.json();
    } catch (error) {
        console.error('Failed to update note:', error);
    }
};
