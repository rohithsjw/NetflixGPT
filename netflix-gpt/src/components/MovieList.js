import MovieCard from "./MovieCard";


const MovieList = ({listTitle,movies})=> {

    return (movies && <div className="pt-2 pl-6 text-white">
        <h1 className="text-3xl ">{listTitle}</h1>
            <div className="flex overflow-x-scroll  py-4 [&::-webkit-scrollbar]:hidden">
            <div className="flex ">
                {
                movies.map((movie)=> <MovieCard key={movie.id} poster_path= {movie.poster_path} title={movie.title}/>)
                }
                 </div>
             </div>
         </div>)
};

export default MovieList;