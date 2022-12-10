import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { message } from '../Features/gameSlice';

// This component is the screen where the user can see the result of their guess
function Screen()
{
    const dispatch = useDispatch();

    const hiddenWord = useSelector((state) => state.game.value);
    const wordCopy = useSelector((state) => state.game.valueCopy);
    const lettersToFind = useSelector((state) => state.game.lettersToFind);
    const counter = useSelector((state) => state.game.counter);
    const screenMessage = useSelector((state) => state.game.finalMessage);


    const wordArray = [...hiddenWord];

    const displayWord = wordArray.map((letter, index) =>
    {
        if (wordCopy[index] === wordArray[index])
        {
            return <div key={index} className="theWord">
                <div>_</div>
            </div>;
        }
        return <div key={index} className="theWord">
            <div>{letter}</div>
        </div>;
    });

    useEffect(() =>
    {
        dispatch(message());
    });


    return (
            <div className="screen">
                <div className="screenText">
                    {counter !== 0 && lettersToFind !== 0 ? displayWord : screenMessage }
                </div>
            </div>
    );
}

export default Screen;