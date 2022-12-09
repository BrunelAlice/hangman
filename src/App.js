import './App.css';
import Console from './Components/Console';
import Hangman from './Components/Hangman.js';

function App() {
    return (
    <>
      <img src="logo.png" alt="Intro Hangman" width="100%" className="logo"/>
      <div className="App">
          <div className="Hangman">
            <Hangman />
          </div>
          <div className="Console">
              <Console />
          </div>
            </div>
    </>
  );
}

export default App;
