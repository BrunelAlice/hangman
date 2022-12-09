import { useSelector } from 'react-redux';

function Game()
{
    const word = useSelector((state) => state.word.value);
    // SCREEN
    const wordArray = [...word];

    const letter = wordArray.map((letter, index) =>
        <div key={index} className="theWord">
            {letter}
        </div>
    );

    // KEYBOARD
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let typed = "";

    function handleClick(e)
    {
        e.preventDefault();
        typed = e.target.innerHTML;
        if (word.includes(typed))
        {
            console.log("You found a letter");
        }

    }

    const keys = letters.map((key, index) =>
        <div className="keys" key={index} onClick={handleClick}>
            {key}
        </div>
    );

    return (
        <>
        <div className="screen">
            <div className="screenText">
                {letter}
            </div>
        </div>
        <div className="keyboard">
            {keys}
        </div>
        </>
    );
}

export default Game;