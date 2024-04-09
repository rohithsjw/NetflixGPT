import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {},
    reducers: {
        addNowPlayingMovies: function(state,action){
            state.nowPlayingMovies = action.payload;
        },

        addMovieTrailerKey: function(state,action){
            state.movieTrailerKey = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailerKey } = movieSlice.actions;
export default movieSlice.reducer;