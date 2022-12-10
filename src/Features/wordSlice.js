import { createSlice } from '@reduxjs/toolkit';

// Create a list of word to use for the game
const word = ["quirky", "funny", "vintage", "disco", "nineties", "hangman", "nintendo", "macarena"];

// Create a function to pick a random word
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// Define the first word that we are going to use
const randomWord = word[getRandomInt(7)];

// Define the initial state of the game
const initialState = {
    value: randomWord,
    isFound: false,
    valueCopy: randomWord,
    counter: 11,
    lettersToFind: randomWord.length,
    finalMessage: "",
    gameIsStarted: false,
};

export const wordSlice = createSlice({
    name: 'word',
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
    },
});

// Action creators are generated for each case reducer function
export const { typedLetter, message, restart } = wordSlice.actions;

export default wordSlice.reducer;