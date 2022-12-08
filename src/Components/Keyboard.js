function Keyboard()
{
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let typed = "";

    function handleClick(e)
    {
        e.preventDefault();
        typed = e.target.innerHTML;
        console.log(typed);
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