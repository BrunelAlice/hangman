import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { message } from '../Features/wordSlice';

function Screen()
{
    const dispatch = useDispatch();

    const hiddenWord = useSelector((state) => state.word.value);
    const wordCopy = useSelector((state) => state.word.valueCopy);
    const lettersToFind = useSelector((state) => state.word.lettersToFind);
    const counter = useSelector((state) => state.word.counter);
    const screenMessage = useSelector((state) => state.word.finalMessage);

    // SCREEN
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