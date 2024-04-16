import { useRef } from "react";
import { LanguageConstants } from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import {  addGptMovies } from "../utils/GPTSlice";
import { nowPlayingOptions } from "../utils/constants";

const GPTSearch = () => {
    const gptSearchInput = useRef(null);
    const dispatch = useDispatch();
    const handleOnSubmitOfForm = (e)=>{
        e.preventDefault();
    }

    const handleGptSearchClick = async ()=>{
        const userInput = gptSearchInput.current.value;
        const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+userInput+"&include_adult=false&page=1",nowPlayingOptions);
        const json = await data.json();
        if(json) 
             dispatch(addGptMovies(json.results));
    }

    const selectedLanguage = useSelector(store=>store.language.selectedLan);

    return <div className="pt-[10%] flex justify-center relative z-4">
    <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={handleOnSubmitOfForm}>
         <input ref={gptSearchInput} type="text" placeholder={LanguageConstants[selectedLanguage].inputPlaceholder} className="p-4 m-4 col-span-9"></input>
         <button className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-md text-white" onClick={handleGptSearchClick}>{LanguageConstants[selectedLanguage].searchLabel}</button>
    </form>
</div>

};

export default GPTSearch;