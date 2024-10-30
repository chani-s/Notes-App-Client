import './App.css';
import Note from './components/Note/Note.jsx';
import NoteList from './components/NoteList/NoteList.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteList />
      </header>
    </div>
  );
}

export default App;
