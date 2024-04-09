
const VideoTitle = ({movieTitle,overView})=> {

    return (
        <div className="pt-36 px-12">
            <h1 className="text-5xl font-bold">{movieTitle}</h1>
            <p className="py-6 text-lg w-1/4">{overView}</p>
            <div className="">
                 <button className=" bg-gray-500 rounded-lg text-white p-4 px-12 text-xl bg-opacity-50 font-bold">▶Play</button>
                 <button className="m-5 bg-gray-500 rounded-lg text-white p-4 px-12 text-xl bg-opacity-50 font-bold">More Info</button>
            </div>
            
        </div>
    )
};

export default VideoTitle;