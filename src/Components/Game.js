import { useDispatch } from 'react-redux';
import { typedLetter } from '../Features/gameSlice';
import Screen from './Screen';

function Game()
{
    // Create a keyboard
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const dispatch = useDispatch();

     return (
        <>
        <Screen/>
        <div className="keyboard">
                {letters.map((key, index) =>
                    <div className="keys" key={index} onClick={(e) => dispatch(typedLetter(e.target.innerHTML))}>
                        {key}
                    </div>
                )}
        </div>
        </>
    );
}

export default Game;