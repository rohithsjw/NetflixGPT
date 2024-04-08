import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const {original_title,overview} = movies[0];
    return (
        <div className="pt-36">
           <VideoTitle movieTitle={original_title} overView={overview}/>
           <VideoBackground/>
        </div>
    )
};
export default MainContainer;