import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

function Game()
{
    const hiddenWord = useSelector((state) => state.word.value);

    // SCREEN
    const wordArray = [...hiddenWord];


    // KEYBOARD
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const [typed, setTyped] = useState("");



    return (
        <>
        <div className="screen">
            <div className="screenText">
                    {wordArray.map((letter, index) =>
                    {
                        if (letter === typed)
                        {
                            return <div key={index} className="theWord">
                                <div>{letter}</div><div>_</div>
                            </div>
                        }

                        return <div key={index} className="theWord">
                            <div className="hiddenLetter">{letter}</div><div>_</div>
                        </div>
                    })}
            </div>
        </div>
        <div className="keyboard">
                {letters.map((key, index) =>
                    <div className="keys" key={index} onClick={(e) => setTyped(e.target.innerHTML) }>
                        {key}
                    </div>
                )}
        </div>
        </>
    );
}

export default Game;