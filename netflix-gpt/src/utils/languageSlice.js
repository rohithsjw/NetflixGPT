import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        selectedLan: "en"
    },
    reducers: {
        selectLanguageTo: function(state,action){
            state.selectedLan = action.payload
        }
    }
});

export const {selectLanguageTo} = languageSlice.actions;
export default languageSlice.reducer;