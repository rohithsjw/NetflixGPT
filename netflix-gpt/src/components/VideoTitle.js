
const VideoTitle = ({movieTitle,overView})=> {

    return (
        <div>
            MainContainer
            <h1 className="">{movieTitle}</h1>
            <p className="">{overView}</p>
            <div className="">
                 <button className="">▶️ Play</button>
                 <button className="">More Info</button>
            </div>
            
        </div>
    )
};

export default VideoTitle;