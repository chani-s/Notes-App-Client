# My Notes App

My Notes App is a note-taking application that allows users to create, edit, delete, and change the color of their notes.

## Author

- [Chani Slater](https://github.com/chani-s)


## Features

- **Add Notes**: Users can add a new note with default text and a random color.
- **Edit Note Content**: Users can change the content of any note.
- **Delete Notes**: Users can delete any existing note.
- **Change Note Color**: Users can change the background color of each note using a color bar.

## Prerequisites

- Node.js
- npm (comes with Node.js)

## Installation

1. Clone the repository to your machine:
    https://github.com/chani-s/Notes-App-Client.git

2. Install the dependencies:
    cd Notes-App-Client
    npm install

## Running the Application

1. Clone the server repository to your machine:
    https://github.com/chani-s/Notes-App-Server.git

2. Run the server according to README. 
    Ensure that the server is running on localhost:8080

3. Run the local APP:
    ### 'npm start'

4. Open your browser and go to:
    localhost:3000


## Client-Side Code - Function Descriptions:
### controller.jsx :

- **fetchNotes:** Sends a GET request to retrieve the list of notes from the server.
- **addNoteToServer:** Sends a POST request to add a new note to the server.
- **deleteNote:** Sends a DELETE request to delete a note by its ID.
- **updateNoteText:** Sends a PUT request to update the content of a note by its ID.
- **updateNoteColor:** Sends a PUT request to update the color of a note by its ID.

### Main Components:

- **App:** The main component that contains the app title and the NoteList component.
- **NoteList:** Displays the list of notes and enables adding, editing, and deleting notes.
Note: Displays an individual note with editable text and color options.
AddNote: Button for adding a new note.
ColorBar: Color bar for selecting a background color for each note.


