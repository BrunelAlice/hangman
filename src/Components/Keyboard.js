import { useSelector } from 'react-redux';

function Keyboard()
{
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const word = useSelector((state) => state.game.value);

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
        <div className="keys" key={index} onClick={ handleClick }>
            { key }
        </div>
    );

    return (
        <div className="keyboard">
            {keys }
        </div>
    );
}

export default Keyboard;