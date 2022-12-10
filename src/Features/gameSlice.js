import { createSlice } from '@reduxjs/toolkit';

// Create a list of word to use for the game
const word = ["funny", "vintage", "disco", "nineties", "hangman", "nintendo", "macarena", "banana"];

// Create a function to pick a random word
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// Define the first word that we are going to use
const randomWord = word[getRandomInt(word.length)];

// Define the initial state of the game
const initialState = {
    value: randomWord,
    isFound: false,
    valueCopy: randomWord,
    counter: 11,
    lettersToFind: randomWord.length,
    finalMessage: "",
    gameIsStarted: false,
    helpIsOpen: false,
};

// Export the game slice with its reducers
export const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        typedLetter: (state, action) =>
        {
            if (state.gameIsStarted === false)
            {
                state.gameIsStarted = true;
            }
            const array = [...state.valueCopy];
            let found = false;

            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === action.payload)
                {
                    array[i] = "_";
                    state.lettersToFind--;
                    found = true;
                }
            }

            if (!found && state.counter !== 0)
            {
                state.counter--;
            }
            state.valueCopy = array.join('');
        },
        message: (state) =>
        {
            if (state.counter === 0)
            {
                state.finalMessage = "You lost";
            } else if (state.lettersToFind === 0)
            {
                state.finalMessage = "You won!";
            }
        },
        restart: (state) =>
        {
            let newWord = word[getRandomInt(7)];
            state.value = newWord;
            state.isFound = false;
            state.valueCopy = newWord;
            state.counter = 11;
            state.lettersToFind = newWord.length;
            state.finalMessage = "";
        },
        toggleHelp: (state) =>
        {
            state.helpIsOpen ? state.helpIsOpen = false : state.helpIsOpen = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { typedLetter, message, restart, toggleHelp } = gameSlice.actions;

export default gameSlice.reducer;