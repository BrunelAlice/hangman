import { useSelector } from 'react-redux';

function Image()
{
    const counter = useSelector((state) => state.word.counter);
    const isStarted = useSelector((state) => state.word.gameIsStarted);

    let url = `hangman_${counter}.svg`;

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

function Hangman()
{

    return (
        <div>
            < Image />
        </div>
    );
}

export default Hangman;