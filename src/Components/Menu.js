import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { restart } from '../Features/gameSlice';
import { toggleHelp } from '../Features/gameSlice';

function Menu()
{

    const dispatch = useDispatch();
    const tryLeft = useSelector((state) => state.game.counter);
    const word = useSelector((state) => state.game.value);
    const counter = useSelector((state) => state.game.counter);
    const letterLeft = useSelector((state) => state.game.lettersToFind);


    return (
        <div className="menu">
            <div className="helpButton" onClick={() => dispatch(toggleHelp())}>
                Help
            </div>
            <div>
                <p>Remaining tries: {tryLeft}</p>
                <p>{counter !== 0 && letterLeft !== 0 ? " " : `The word was ${word}`}</p>
            </div>
            <div className="restartButton" onClick={() => dispatch(restart()) }>
                Restart
            </div>
        </div>
    );
}

export default Menu;