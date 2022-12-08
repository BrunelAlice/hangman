import Keyboard from "./Keyboard";
import Menu from "./Menu";
import Screen from "./Screen";

function Console()
{
    return (
        <div className="consoleFrame">
            <Menu />
            <Screen />
            <Keyboard />
        </div>
    );
}

export default Console;