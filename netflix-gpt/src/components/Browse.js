import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchComponent from "./GPTSearchComponent";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () =>{
    const isGptEnabled = useSelector(store=> store.GPT.isEnabled);
    useNowPlayingMovies();
    usePopularMovies();
    usePopularTvSeries();
    useTopratedMovies();
    useUpcomingMovies();
    return (
        <div> 
            <Header/>
            {
              isGptEnabled ? <GPTSearchComponent /> :
                     <>
                      <MainContainer />
                      <SecondaryContainer />
                     </>
            }
        </div>
    )
}

export default Browse;