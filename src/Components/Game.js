import Keyboard from './Keyboard';
import Screen from './Screen';

import { useSelector } from 'react-redux';
import Help from './Help';

function Game()
{
    const helpIsOpen = useSelector((state) => state.game.helpIsOpen);

     return (
        <>
        <Screen/>
             {helpIsOpen ? <Help /> : <Keyboard /> }
        </>
    );
}

export default Game;