import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_ICON, supportedLanguages } from "../utils/constants";
import { toggleGPTState } from "../utils/GPTSlice";
import { selectLanguageTo } from "../utils/languageSlice";

const Header = () => {
    const isGptEnabled = useSelector(store=> store.GPT.isEnabled);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/errorPage");
          });
    };

    const handleGPTBtnClick = ()=>{
      dispatch(toggleGPTState());
    }

    const handleLanguageChange = (e)=>{
      dispatch(selectLanguageTo(e.target.value));
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged (auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse");
              // ...
            } else {
              // User is signed out=> remove user from store.
              dispatch(removeUser());
              navigate("/");
            }
          }); // eslint-disable-next-line
          //unsubscribe when headercomponent is unmounted.
          return () => unsubscribe();
    },[]); 

    return (
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className=" w-44 " src={LOGO} alt="netflix logo"/>
            {user &&
            <div className="flex p-2">
              <div>
              { isGptEnabled && 
                <select className="rounded-sm font-bold" onChange={handleLanguageChange}>
                  {supportedLanguages.map((lan)=> <option key={lan.identifier} value={lan.identifier}>{lan.name}</option> )}
                </select>
              }
              <button className="bg-red-700 px-4 mx-4 py-2 my-2 rounded-md text-white font-bold" onClick={handleGPTBtnClick}>GPT Search</button>
              </div>
              
               <img className="w-13 h-10" src= {USER_ICON} alt="profileIcon" />
              <button className="font-bold text-white" onClick={handleSignout}>(Sign-out)</button>
            </div>}
        </div>
       
       
    )
}

export default Header;