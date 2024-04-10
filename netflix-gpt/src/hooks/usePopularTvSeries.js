import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularTVseries } from "../utils/movieSlice";

const usePopularTvSeries = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async function(){
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', nowPlayingOptions)
        const json = await data.json();
        if(json){
            dispatch(addPopularTVseries(json.results));
        }
    }
    useEffect(()=> {
        getNowPlayingMovies();
    },[])
}

export default usePopularTvSeries;