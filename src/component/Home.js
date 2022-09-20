import React from "react";

const home = () => {
  return (
    <div>
      <div className="hero min-h-screen  ">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-[#08080846] p-8 rounded-lg relative">
            <h1 className="mb-5 text-5xl font-bold">
              Your reason to
              <div className="waviy">
                <span className="s1">S</span>
                <span className="s2">m</span>
                <span className="s3">i</span>
                <span className="s4">l</span>
                <span className="s5">e</span>
                <span className="s6">.</span>
              </div>
            </h1>

            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="topBtn">
              <span></span>
              <span></span>
              <span></span>
              <span></span> Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
