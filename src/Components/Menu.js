import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { restart } from '../Features/gameSlice';

function Menu()
{

    const dispatch = useDispatch();
    const tryLeft = useSelector((state) => state.game.counter);

    return (
        <div className="menu">
            <div className="helpButton">
                Help
            </div>
            <div>
                Remaining tries: { tryLeft }
            </div>
            <div className="restartButton" onClick={() => dispatch(restart()) }>
                Restart
            </div>
        </div>
    );
}

export default Menu;