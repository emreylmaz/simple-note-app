import './App.css';
import Form from './components/Form';
import NoteList from './components/NoteList';
import TextArea from './components/TextArea';

function App() {
    return (
        <div className="App">
            <Form/>
            <TextArea/>
            <NoteList/>
        </div>
    );
}

export default App;