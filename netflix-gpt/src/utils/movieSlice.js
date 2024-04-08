import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
        addNowPlayingMovies: function(state,action){
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;