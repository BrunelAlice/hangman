import { createSlice } from '@reduxjs/toolkit';

const word = ["quirky", "funny", "vintage", "disco", "nineties", "hangman", "nintendo","macarena"];

const initialState = {
    value: word[0],
    isFound: false,
    valueCopy: word[0],
    counter: 11,
    lettersToFind: word.length,
    finalMessage: "",
};

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        typedLetter: (state, action) =>
        {
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
            console.log("counter " + state.counter);
            console.log("remaining letters " + state.lettersToFind);
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
            function getRandomInt(max)
            {
                return Math.floor(Math.random() * max);
            }
            let newWord = word[getRandomInt(3)];
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