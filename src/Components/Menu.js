import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { restart } from '../Features/wordSlice';

function Menu()
{

    const dispatch = useDispatch();
    const tryLeft = useSelector((state) => state.word.counter);

    return (
        <div className="menu">
            <div className="helpButton">
                Help
            </div>
            <div>
                Remaining try: { tryLeft }
            </div>
            <div className="restartButton" onClick={() => dispatch(restart()) }>
                Restart
            </div>
        </div>
    );
}

export default Menu;