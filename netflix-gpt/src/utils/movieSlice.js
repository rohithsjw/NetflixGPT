import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        popularTvSeries: null
    },
    reducers: {
        addNowPlayingMovies: function(state,action){
            state.nowPlayingMovies = action.payload;
        },

        addMovieTrailerKey: function(state,action){
            state.movieTrailerKey = action.payload;
        },

        addPopularMovies: function(state,action){
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: function(state,action){
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: function(state,action){
            state.upcomingMovies = action.payload;
        },

        addPopularTVseries: function(state,action){
            state.popularTvSeries = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addMovieTrailerKey , addPopularMovies , addTopRatedMovies , addUpcomingMovies , addPopularTVseries } = movieSlice.actions;
export default movieSlice.reducer;