import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPTEnabled",
    initialState: {
        isEnabled: false,
        gptMovies: null
    },
    reducers: {
        toggleGPTState: function(state){
            state.isEnabled = !state.isEnabled
        },

        addGptMovies: function(state,action){
            state.gptMovies = action.payload;
        }
    }
});

export const { toggleGPTState , addGptMovies } = GPTSlice.actions;

export default GPTSlice.reducer;