import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "./userSlice";
import movieReducer from './movieSlice';
import GPTReducer from "./GPTSlice";
import languageReducer from "./languageSlice"

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: movieReducer,
        GPT: GPTReducer,
        language: languageReducer
    }
});

export default appStore;