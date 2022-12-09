import { useSelector } from 'react-redux';

function Hangman()
{
    const counter = useSelector((state) => state.word.counter);
    let url = `hangman_${counter}.svg`

    return (
        <div>
            <img src={ url } alt="Intro Hangman" width="100%" />
        </div>
    );
}

export default Hangman;