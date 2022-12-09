import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './Features/wordSlice';

export const store = configureStore({
    reducer: {
        word: wordReducer,
    },
});