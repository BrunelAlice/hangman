import introImg from '../Images/hangman_intro_img.png';

function Hangman()
{
    return (
        <div>
            <img src={introImg} alt="Intro Hangman" width="100%"/>
        </div>
    );
}

export default Hangman;