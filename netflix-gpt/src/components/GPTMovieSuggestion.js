import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () =>{
    const gptMoviesRes = useSelector(store=> store.GPT.gptMovies);
    
    return  (
            gptMoviesRes && <div className="bg-black relative z-20 top-3 m-3">
            <MovieList listTitle={"Results"} movies = {gptMoviesRes}/>
            </div>
        )
};

export default GPTMovieSuggestion;