function Keyboard()
{
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const keys = letters.map((key, index) => 
        <div class="keys" key={key.index }>
            { key }
        </div>
    );

    return (
        <div class="keyboard">
            {keys }
        </div>
    );
}

export default Keyboard;