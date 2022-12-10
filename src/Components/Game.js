import Keyboard from './Keyboard';
import Screen from './Screen';
import Help from './Help';

import { useSelector } from 'react-redux';

// This component is the game UI with a screen and a keyboard (or a help window when toggled)
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