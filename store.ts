import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import todoReucer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        todo: todoReucer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
