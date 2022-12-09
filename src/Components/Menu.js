import { useSelector } from 'react-redux';

function Menu()
{
    const tryLeft = useSelector((state) => state.word.counter);

    return (
        <div className="menu">
            <div className="helpButton">
                Help
            </div>
            <div>
                Remaining try: { tryLeft }
            </div>
            <div className="restartButton">
                Restart
            </div>
        </div>
    );
}

export default Menu;