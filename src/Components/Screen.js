function Screen()
{
    const word = "Thermostatic";
    const wordArray = [...word];

    const letter = wordArray.map((letter, index) =>
        <div key={index} className="theWord" onClick={ (event) => console.log(this.event.target.innerHTML) }>
            {letter}
        </div>
    );

    return (
        <div className="screen">
            <div className="screenText">
                {letter}
            </div>
        </div>
    );
}

export default Screen;