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


export const addNote = async (newNote) => {
    try {
        const response = await fetch('http://localhost:8080/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        });
        return await response.json(); 
    } catch (error) {
        console.error('Failed to add note:', error);
    }
};

export const addNoteToServer = async (note) => {
    try {
      const response = await fetch('http://localhost:8080/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to add note:', error);
      return null; 
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

export const updateNoteText = async (id, updatedNote) => {
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

export const updateNoteColor = async (id, updatedNote) => {
    try {
        const response = await fetch(`http://localhost:8080/api/notes/color/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedNote),
        });
        return await response.json();
    } catch (error) {
        console.error('Failed to update note:', error);
    }
};
