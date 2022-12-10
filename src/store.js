import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './Features/gameSlice';

// This is the store to export the game reducers
export const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});