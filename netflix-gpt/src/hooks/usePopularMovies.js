import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async function(){
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', nowPlayingOptions)
        const json = await data.json();
        if(json){
            dispatch(addPopularMovies(json.results));
        }
    }
    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}

export default usePopularMovies;