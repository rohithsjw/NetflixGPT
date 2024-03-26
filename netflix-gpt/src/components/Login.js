import Header from "./Header";
import { useState } from "react";

const Login = () =>{
    const [isSignedIn,setIsSignedIn] = useState(true);
    return (
        <div>
            <Header />
            <div className="background-image absolute">
            <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgroundImage"></img>
            </div>
            <form className="absolute bg-black w-3/12 p-12 my-36 left-0 right-0 mx-auto text-white">
                <h1 className="font-bold text-3xl py-4">{isSignedIn? "Sign in" : "Sign Up"}</h1>
                <input type="text" placeholder="Email address" className="p-2 my-2 w-full"></input>
                { !isSignedIn && <input type="text" placeholder="Full name" className="p-2 my-2 w-full"></input>  }
                <input type="password" placeholder="Password" className="p-2 my-2 w-full"></input>
                <button className="p-4 my-4 bg-red-700 w-full">{isSignedIn? "Sign in" : "Sign Up"}</button>
                <p>{"New to Netflix? "}
                <span  className="cursor-pointer hover:underline" onClick={() => {
                    setIsSignedIn(!isSignedIn)
                }}>Sign up now.</span>
                </p>
            </form>
        </div>
    )
}

export default Login;