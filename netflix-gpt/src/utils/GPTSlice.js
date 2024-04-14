import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPTEnabled",
    initialState: {
        isEnabled: false
    },
    reducers: {
        toggleGPTState: function(state){
            state.isEnabled = !state.isEnabled
        }
    }
});

export const { toggleGPTState } = GPTSlice.actions;

export default GPTSlice.reducer;