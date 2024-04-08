import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async function(){
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', nowPlayingOptions)
        const json = await data.json();
        if(json){
            dispatch(addNowPlayingMovies(json.results));
        }
    }
    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies;