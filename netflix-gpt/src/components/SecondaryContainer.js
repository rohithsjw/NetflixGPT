import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies)
    return  (
        movies && <div className="bg-black">
            <div className="mt-0 md:-mt-52 relative z-20">
            <MovieList listTitle={"Now Playing"} movies = {movies.nowPlayingMovies}/>
            <MovieList listTitle={"Popular Movies"} movies = {movies.popularMovies}/>
            <MovieList listTitle={"Top rated movies"} movies = {movies.topRatedMovies}/>
            <MovieList listTitle={"Upcoming movies"} movies = {movies.upcomingMovies}/>
            <MovieList listTitle={"Popular Tv series"} movies = {movies.popularTvSeries}/>
            </div>
           
        </div>
    )
};

export default SecondaryContainer;