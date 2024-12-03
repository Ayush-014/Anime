import React, { useState } from 'react';
import DesktopImage from '/public/purple-aesthetic-train-57-1366x768.jpg';
import GOOGLE_ICON from "/public/icons8-google.svg";

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disbaled: "D9D9D9"
}

const ToggleLoginForm = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="w-full h-screen min-h-screen flex items-start">
      <div className={`relative w-1/2 h-[80%] flex flex-col `}>
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-bold my-4">Welcome to Anime Verce!</h1>
          <p className="text-xl text-white font-normal">Start for free and feel an enhanced UI for watching Anime!</p>
        </div>
        <img src={DesktopImage} className="w-full h-full object-cover" />
      </div>

      <div className={`w-1/2 h-[80%] bg-[#f5ffff] flex flex-col pl-20 justify-between `}>
        <div className="w-full flex flex-col max-w-[450px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-2xl text-center font-semibold my-2">{showLoginForm ? 'Login' : 'Register'}</h3>
            <p className="text-xl mb-2">{showLoginForm ? 'Welcome Back! Please enter your details.' : 'Sign Up for better experience'}</p>
          </div>
          <div className="w-full flex flex-col">
            {showLoginForm ? (
              <form>
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full text-black py-3 border-b border-black outline-none focus:outline-none"
                />
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="w-full text-black py-3 my-2 border-b border-black outline-none focus:outline-none"
                />
              </form>
            ) : (
              <form>
                <input
                  placeholder="What should we call you by?"
                  id="userId"
                  name="userId"
                  type="userId"
                  autoComplete="userId"
                  required
                  className="w-full text-black py-3 border-b border-black outline-none focus:outline-none"
                />
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full text-black py-3 border-b border-black outline-none focus:outline-none"
                />
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="w-full text-black py-3 my-2 border-b border-black outline-none focus:outline-none"
                />
              </form>
            )}
          </div>
          <div className="w-full flex items-center justify-between">
            {showLoginForm ? (
              <>
                <div className="w-full flex items-center">
                  <input type="checkbox" className='w-4 h-4 mr-2' />
                  <p className="text-sm">Remember me for 30 days</p>
                </div>
                <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password ?</p>
              </>
            ) : null}
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-3 text-center flex items-center justify-center">
              {showLoginForm ? 'Log in' : 'Join'}
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-3 text-center flex justify-center items-center">
            <img src={GOOGLE_ICON} className="h-6 mr-2" />
            Sign In with Google
          </div>
        </div>

        <div className="w-full flex items-center justify-center mb-4">
          <p className="text-sm font-normal text-[#060606]">
            {showLoginForm ? 'Don\'t have an account ?' : 'Already a user ?'}
            <span className="font-semibold underline underline-offset-2" onClick={toggleForm}>
              {showLoginForm ? ' Sign Up for Free' : ' Sign In here'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ToggleLoginForm;
