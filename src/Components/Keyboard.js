import { useDispatch } from 'react-redux';
import { typedLetter } from '../Features/gameSlice';

function Keyboard()
{
    // Create a keyboard
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const dispatch = useDispatch();

    return (
            <div className="keyboard">
                {letters.map((key, index) =>
                    <div className="keys" key={index} onClick={(e) => dispatch(typedLetter(e.target.innerHTML))}>
                        {key}
                    </div>
                )}
            </div>
    );
}

export default Keyboard;