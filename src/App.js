import './App.css';
import Note from './pages/notes';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.color)

  return (
    <div className="App">
      <div>
      <Note/>
      </div>
    </div>
  );
}

export default App;
