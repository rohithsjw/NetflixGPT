import { LanguageConstants } from "../utils/LanguageConstants";
import { useSelector } from "react-redux";

const GPTSearch = () => {
    const selectedLanguage = useSelector(store=>store.language.selectedLan);

    return <div className="pt-[10%] flex justify-center relative z-4">
    <form className="w-1/2 bg-black grid grid-cols-12">
         <input type="text" placeholder={LanguageConstants[selectedLanguage].inputPlaceholder} className="p-4 m-4 col-span-9"></input>
         <button className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-md text-white">{LanguageConstants[selectedLanguage].searchLabel}</button>
    </form>
</div>

};

export default GPTSearch;