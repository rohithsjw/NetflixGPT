import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async function(){
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', nowPlayingOptions)
        const json = await data.json();
        if(json){
            dispatch(addUpcomingMovies(json.results));
        }
    }
    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}

export default useUpcomingMovies;