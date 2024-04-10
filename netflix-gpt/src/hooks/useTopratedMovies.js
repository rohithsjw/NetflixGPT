import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopratedMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async function(){
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', nowPlayingOptions)
        const json = await data.json();
        if(json){
            dispatch(addTopRatedMovies(json.results));
        }
    }
    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}

export default useTopratedMovies;