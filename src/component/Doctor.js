import React from "react";
import Img from "../image/doctor.jpg";
import Img2 from "../image/doctor2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Doctor = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto p-8 ">
      {/* image side */}
      <div className="md:order-last ">
        <img
          src={Img}
          alt=""
          style={{
            borderRadius: "53% 47% 73% 27% / 29% 62% 38% 71%  ",
          }}
          className="object-cover md:w-96 md:block hidden float-right"
        />
        <img
          src={Img2}
          alt=""
          className="object-cover block md:hidden rounded-full w-72 my-6"
        />
      </div>
      {/* text side */}
      <div className="m-auto">
        <div>
          <div className="mb-3">
            <span className="text-teal-400 font-bold">
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" mr-3 hover:text-sky-500"
                style={{ transition: "0.5s", fontSize: "16px" }}
              ></FontAwesomeIcon>
              CHOOSE US?
            </span>
          </div>
          <div className="">
            <span className="font-bold md:flex text-4xl">
              Why{" "}
              <div className="waviy">
                <span className="s1">H</span>
                <span className="s2">a</span>
                <span className="s3">p</span>
                <span className="s5">p</span>
                <span className="s6">y</span>
              </div>{" "}
              Life. ?
            </span>
          </div>
          <div className="my-8">
            <p className="text-2xl font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsum laborum numquam! Ipsa vero dolorem temporibus reprehenderit
              officia tenetur esse repudiandae unde necessitatibus, dolorum at
              rerum vel nam quia blanditiis dolores impedit voluptatem nesciunt.
              <br />
              <br />
              Quam temporibus corporis, molestias voluptatem dolor tenetur
              doloribus obcaecati qui quas, porro delectus odit a dolores.
            </p>
          </div>
          <div>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
