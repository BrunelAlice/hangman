import { useDispatch } from 'react-redux';
import { typedLetter } from '../Features/gameSlice';
import { useSelector } from 'react-redux';

// This component is the keyboard to let the user type guesses
function Keyboard()
{
    // Create a keyboard
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Import dispatch to use actions
    const dispatch = useDispatch();
    // Import state
    const guessed = useSelector((state) => state.game.guesses);

    // Display a keyboard and add actions or styling rules
    return (
            <div className="keyboard">
                {letters.map((key, index) =>
                    <div className={guessed.includes(key) ? "guessedKeys" : "keys" } key={index} onClick={(e) => dispatch(typedLetter(e.target.innerHTML))}>
                        {key}
                    </div>
                )}
            </div>
    );
}

export default Keyboard;