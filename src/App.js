import './App.css';
import Console from './Components/Console';
import Hangman from './Components/Hangman.js';

function App() {
  return (
    <div className="App">
          <div className="Hangman">
            <Hangman />
          </div>
          <div className="Console">
              <Console />
          </div>
    </div>
  );
}

export default App;
