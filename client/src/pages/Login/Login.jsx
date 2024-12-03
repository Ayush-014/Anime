import SignIn from "../0.login/SigIn"
import '../../../src/style.css'
import React, { useState } from 'react';

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleJoinClick = () => {
    setShowSignIn(true);
  };

  return (
    <div className="relative w-screen h-screen">
        <img src="/public/newwb.jpg" className="absolute -z-1"></img>
      <div className={`absolute top-52 left-[20%] w-80 h-96 text-4xl text-gray-800 font-bold p-8 pt-14 backdrop-blur-3xl text-center rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          Welcome! to Anime-Verse. Join Anime verse community
        </div>
        <button onClick={handleJoinClick} className="mt-10 p-2 w-full text-xl blurr rounded-lg">
          JOIN
          <i class="ri-login-box-line m-2"></i>
        </button>
      </div>

      <div className={`absolute top-52 left-[50%] w-80 h-96 p-8 py-20 text-gray-800 text-center backdrop-blur-3xl text-4xl font-bold rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative h-full">
            Don't want to Sign in now, just proceed here..
              <a href="/" className="absolute bottom-0 left-0 p-2 w-full text-center text-xl blurr rounded-lg">
                Continue
                <i class="ri-guide-fill"></i>
              </a>
        </div>
      </div>
      <div className={`absolute top-28 left-[35%] p-14 px-10 w-80 h-96 backdrop-blur-3xl text-center text-3xl font-bold rounded-lg duration-500 hover:z-10 hover:duration-500 hover:scale-105 glowing-border ${showSignIn ? 'opacity-0' : 'opacity-100'}`}>
        Ready to dive back into the world of anime? Discover, rate, and review anime on AnimeVerse.
        <div className="text-center mt-4">
        </div>
      </div>
      {showSignIn && (
        <div className="form w-screen h-screen flex justify-center items-center ">
          
          <SignIn />
        </div>
      )}
    </div>
  )
}

export default Login;






        // <div className="h-screen w-screen overflow-y-hidden bg-gradient-to-r from-[#65738B] to-[#252B33]">
        //     <div className="absolute -top-20 -left-48 h-max-screen scale-75 HomeBgImage">
        //         <img src={HomeImage} alt="Home Image"/>
        //     </div>
        //     <div className="absolute right-5 top-44">
        //         <SignIn />
        //     </div>
        // </div>