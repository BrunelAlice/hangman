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
        // This reducer takes a user input (typed guess)
        typedLetter: (state, action) =>
        {
            // Define if the game is started
            if (state.gameIsStarted === false)
            {
                state.gameIsStarted = true;
            }
            // Create an array from the state to compare letters
            const array = [...state.valueCopy];
            // Create a variable to check if guess was correct
            let found = false;
            // Check if the letter correspond and update state
            for (let i = 0; i < array.length; i++)
            {
                if (array[i] === action.payload)
                {
                    array[i] = "_";
                    state.lettersToFind--;
                    found = true;
                }
            }
            // If guess was not correct, user lose a point
            if (!found && state.counter !== 0)
            {
                state.counter--;
            }
            // Recreate the initial value of valueCopy
            state.valueCopy = array.join('');
        },
        // This reducer is used to display a message in Screen
        message: (state) =>
        {
            // If the counter is down to 0, the user lose the game
            if (state.counter === 0)
            {
                state.finalMessage = "You lost...";
            // But if there is no remaining letters to find, the user win
            } else if (state.lettersToFind === 0)
            {
                state.finalMessage = "You won!";
            }
        },
        // This reducer starts another game and reset states except gameIsStarted
        restart: (state) =>
        {
            let newWord = word[getRandomInt(word.length)];
            state.value = newWord;
            state.isFound = false;
            state.valueCopy = newWord;
            state.counter = 11;
            state.lettersToFind = newWord.length;
            state.finalMessage = "";
        },
        // This reducer toggles help display
        toggleHelp: (state) =>
        {
            state.helpIsOpen ? state.helpIsOpen = false : state.helpIsOpen = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { typedLetter, message, restart, toggleHelp } = gameSlice.actions;

export default gameSlice.reducer;