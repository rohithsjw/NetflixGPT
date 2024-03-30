import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";

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
        onAuthStateChanged (auth, (user) => {
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
    },[]); 

    return (
        <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className=" w-44 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo"/>
            {user &&
            <div className="flex p-4">
              <img className="w-13 h-10" src="https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaSDR-kTPhPYcVVGSsV0jC3D-Q5HZSFE6fjzAM-4cMpltx1Gw9AV7OTnL8sYnC6CBxOBZQEAJLjStt822uD2lctOvNR05qM.png?r=962" alt="profileIcon" />
              <button className="font-bold text-white" onClick={handleSignout}>(Sign-out)</button>
            </div>}
        </div>
       
       
    )
}

export default Header;