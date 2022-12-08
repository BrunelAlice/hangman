function Screen()
{
    const word = "Thermostatic";
    const wordArray = [...word];

    const letter = wordArray.map((letter, index) =>
        <div key={letter.index} className="theWord">
            {letter}
        </div>
    );

    return (
        <div class="screen">
            <div class="screenText">
                {letter}
            </div>
        </div>
    );
}

export default Screen;