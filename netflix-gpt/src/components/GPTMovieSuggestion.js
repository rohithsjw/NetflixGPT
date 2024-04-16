import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () =>{
    const gptMoviesRes = useSelector(store=> store.GPT.gptMovies);
    
    return  (
            gptMoviesRes && <div className="bg-black">
            <div className="relative z-20">
            <MovieList listTitle={"Results"} movies = {gptMoviesRes}/>
            </div>
            </div>
        )
};

export default GPTMovieSuggestion;