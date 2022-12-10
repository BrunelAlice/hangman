import { useSelector } from 'react-redux';

// This component display the different steps of the hangman according to user score
function Image()
{
    // Import states
    const counter = useSelector((state) => state.game.counter);
    const isStarted = useSelector((state) => state.game.gameIsStarted);

    // Set a path to the images
    let url = `hangman_${counter}.svg`;

    // Display the intro image only when the game hasn't started yet
    const displayImage = () =>
    {
        if (isStarted)
        {
            return <img src={url} alt="Intro Hangman" width="100%" />;
        } else
        {
            return <img src="hangman_intro_img.png" alt="Intro Hangman" width="100%" />;
        }
    }
    return displayImage()
}

// This component allow to get the returned function from image
function Hangman()
{

    return (
        <div>
            < Image />
        </div>
    );
}

export default Hangman;