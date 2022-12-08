import Keyboard from "./Keyboard";
import Menu from "./Menu";
import Screen from "./Screen";

function Console()
{
    return (
        <div class="consoleFrame">
            <Menu />
            <Screen />
            <Keyboard />
        </div>
    );
}

export default Console;