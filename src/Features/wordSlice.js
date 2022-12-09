import { createSlice } from '@reduxjs/toolkit';

const word = "test";

const initialState = {
    value: word,
    isFound: false,
    valueCopy: word,
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
            console.log(state);
        },
    },
});

// Action creators are generated for each case reducer function
export const { typedLetter, message, restart } = wordSlice.actions;

export default wordSlice.reducer;