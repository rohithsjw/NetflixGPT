import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return ;

    const {original_title,overview, id} = movies[0];
    return (
        <div >
           <VideoTitle movieTitle={original_title} overView={overview}/>
           <VideoBackground videoId = {id}/>
        </div>
    )
};
export default MainContainer;