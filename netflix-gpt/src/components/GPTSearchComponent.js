import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearch from "./GPTSearch";

const GPTSearchComponent = ()=>{

    return <div>
         <div className="background-image absolute">
            <img  src={BACKGROUND_IMAGE} alt="backgroundImage"></img>
            </div>
        <GPTSearch />
        <GPTMovieSuggestion />
    </div>
}

export default GPTSearchComponent;