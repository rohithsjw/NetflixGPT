import { useEffect } from "react";
import { nowPlayingOptions } from "../utils/constants";
import { addMovieTrailerKey } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useGetVideoTrailerKey = (videoId) => {

    const dispatch = useDispatch();
    const addMovieTrailerToStore = async function(){
        const data = await fetch('https://api.themoviedb.org/3/movie/'+videoId+'/videos?language=en-US',nowPlayingOptions);
        const json = await data.json();
        if(json){
            const trailerKeyArr = json.results.filter((item) => item.type == "Trailer");
            const trailerKey = trailerKeyArr.length> 0? trailerKeyArr[0].key: json[0].key;
            dispatch(addMovieTrailerKey(trailerKey))
        }
    }

    useEffect(()=>{
        addMovieTrailerToStore();
    },[]);
};

export default useGetVideoTrailerKey;