import './App.css';
import Console from './Components/Console';
import Hangman from './Components/Hangman.js';
import Logo from './Components/Logo';

function App() {
    return (
    <>
      <Logo />
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
