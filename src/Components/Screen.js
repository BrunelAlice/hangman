import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { message } from '../Features/gameSlice';

// This component is the screen where the user can see the result of their guess
function Screen()
{
    // Import dispatch to use actions
    const dispatch = useDispatch();

    // Import all required states
    const hiddenWord = useSelector((state) => state.game.value);
    const wordCopy = useSelector((state) => state.game.valueCopy);
    const lettersToFind = useSelector((state) => state.game.lettersToFind);
    const counter = useSelector((state) => state.game.counter);
    const screenMessage = useSelector((state) => state.game.finalMessage);

    // Create an array from the word
    const wordArray = [...hiddenWord];
    // Use the word copy to how it should appear on screen
    const displayWord = wordArray.map((letter, index) =>
    {
        // If the letter is still the same as the one in the hidden word
        // it means it hasn't been found yet and must stay hidden
        if (wordCopy[index] === wordArray[index])
        {
            return <div key={index} className="theWord">
                <div>_</div>
            </div>;
        }
        // If not, we show the letter that has been found earlier
        return <div key={index} className="theWord">
            <div>{letter}</div>
        </div>;
    });

    // Use effect function to update the message to display
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