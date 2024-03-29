import { Validate } from "../utils/validate";
import Header from "./Header";
import { useState,useRef } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () =>{
    const [isSignedIn,setIsSignedIn] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () => {
        const errorMsg = Validate(email.current.value,password.current.value);
        if(errorMsg){
            setErrorMessage(errorMsg);
            return ;
        } 

        if(!isSignedIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                })
                 .catch((error) => {
                     const errorCode = error.code;
                     const errorMessage = error.message;
                     setErrorMessage(errorCode + errorMessage);
                 });
        } else {

        }
    };

    const emptyAllFields = () => {
        email.current.value = "";
        password.current.value = "";
    }

    return (
        <div>
            <Header />
            <div className="background-image absolute">
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgroundImage"></img>
            </div>
            <form className="absolute bg-black w-3/12 p-12 my-36 left-0 right-0 mx-auto text-white rounded-md" onSubmit={(e) => {e.preventDefault();}}>
                <h1 className="font-bold text-3xl py-4">{isSignedIn? "Sign in" : "Sign Up"}</h1>
                <input ref={email} type="text" placeholder="Email address" className="p-2 my-2 w-full text-black"></input>
                { !isSignedIn && <input type="text" placeholder="Full name" className="p-2 my-2 w-full text-black"></input>  }
                <input ref={password} type="password" placeholder="Password" className="p-2 my-2 w-full text-black"></input>
                {errorMessage && <p className="text-red-600 font-bold">{errorMessage}</p>}
                <button className="p-4 my-4 bg-red-700 w-full" onClick={handleBtnClick}>{isSignedIn? "Sign in" : "Sign Up"}</button>
                <p>{isSignedIn? 'New to Netflix? ': 'Registered member? '}
                <span  className="cursor-pointer hover:underline" onClick={() => {
                    setIsSignedIn(!isSignedIn);
                    setErrorMessage(null);
                    emptyAllFields();
                }}>{isSignedIn ? "Sign up now.":"Sign In"}</span>
                </p>
            </form>
        </div>
    )
}

export default Login;