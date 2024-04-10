import useGetVideoTrailerKey from "../hooks/useGetVideoTrailerKey";
import { useSelector } from "react-redux";

const VideoBackground = ({videoId}) => {
    useGetVideoTrailerKey(videoId);
    const videoKey = useSelector(store => store.movies?.movieTrailerKey)
    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video" src={'https://www.youtube.com/embed/'+"hXzcyx9V0xw"+'?si=3JriJmSg4HO9Q0hS&autoplay=1&mute=1'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
};

export default VideoBackground;