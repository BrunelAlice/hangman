import Menu from "./Menu";
import Game from "./Game";

// This component compiles the game console elements
function Console()
{

    return (
        <div className="consoleFrame">
            <Menu />
            <Game />
        </div>
    );
}

export default Console;