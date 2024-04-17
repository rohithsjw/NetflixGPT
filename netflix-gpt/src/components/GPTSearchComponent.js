import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearch from "./GPTSearch";

const GPTSearchComponent = ()=>{

    return <div>
         <div className="fixed -z-10">
            <img  src={BACKGROUND_IMAGE} alt="backgroundImage" className=" w-full"></img>
            </div>
        <GPTSearch />
        <GPTMovieSuggestion />
    </div>
}

export default GPTSearchComponent;