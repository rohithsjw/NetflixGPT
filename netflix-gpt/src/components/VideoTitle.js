
const VideoTitle = ({movieTitle,overView})=> {

    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white">
            <h1 className="text-5xl font-bold">{movieTitle}</h1>
            <p className="py-6 text-lg w-1/4">{overView}</p>
            <div className="">
                 <button className=" bg-white rounded-lg text-black p-4 px-12 text-xl bg-opacity-90 font-bold hover:bg-opacity-50">Play</button>
                 <button className="m-5 bg-gray-500 rounded-lg text-black p-4 px-12 text-xl bg-opacity-50 font-bold hover:bg-opacity-25">More Info</button>
            </div>
            
        </div>
    )
};

export default VideoTitle;