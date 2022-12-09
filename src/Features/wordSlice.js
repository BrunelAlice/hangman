import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "thermostatic",
    isFound: false,
};

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        win: (state) =>
        {
            console.log(state);
        },
        loose: (state) =>
        {
            console.log(state);
        },
        restart: (state) =>
        {
            console.log(state);
        },
    },
});

// Action creators are generated for each case reducer function
export const { win, loose, restart } = wordSlice.actions;

export default wordSlice.reducer;