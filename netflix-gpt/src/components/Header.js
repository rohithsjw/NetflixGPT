import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
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
            <div className="flex p-4">
              <img className="w-13 h-10" src= {USER_ICON} alt="profileIcon" />
              <button className="font-bold text-white" onClick={handleSignout}>(Sign-out)</button>
            </div>}
        </div>
       
       
    )
}

export default Header;