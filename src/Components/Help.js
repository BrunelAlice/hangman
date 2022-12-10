import { useDispatch } from 'react-redux';
import { toggleHelp } from '../Features/gameSlice';

// This component toggles a help window
function Help()
{
    // To be able to use the "toggle help" action, we have to import dispatch
    const dispatch = useDispatch();

    // Return the content of the help window
    return (
        <div className="help">
            <div className="helpButton closing" onClick={() => dispatch(toggleHelp())}>
            X
            </div>
            <div className="helpContent">
            <h2>Rules of the game:</h2>
            <p>To win this game, you will have to find all the letter of the mysterious word. It is that simple!</p>
            <p>But beware, if you make a wrong guess, our discoball friend will get one step closer to being hanged. When that is the case, you will lose the game.</p>
            <h2>Hint</h2>
                <p>There are some letter in the alphabet that are used more often than others. These letters are a, e, i, o, u, y. I would recommend to try first with one of these!</p>
            </div>
        </div>
    );
}

export default Help;