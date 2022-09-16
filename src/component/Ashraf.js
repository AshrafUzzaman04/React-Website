import React from "react";
import MyImg from "./MyImg";

const Ashraf = () => {
  return (
    <div className="w-full min-h-screen flex bg-gray-600 ">
      <header className="App-header flex flex-col m-auto text-center">
        <MyImg />
        <p className="text-zinc-50 text-2xl b my-3">
          I am a Web Application Designer & Developer.
        </p>
        <a
          className="text-xl font-mono  text-cyan-400 tracking-normal"
          href="https://www.facebook.com/ashraf.uzmahim"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ashraf Uz Mahim
        </a>
      </header>
    </div>
  );
};

export default Ashraf;
