/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { TextField } from "@mui/material";

const Msg = () => {
  return (
    <div className="container mx-auto md:px-8 grid grid-cols-1 md:grid-cols-2 justify-around mt-20 mb-0 md:my-20  w-full ">
      {/* contact form */}
      <div className="mx-auto md:mx-0">
        <div className="text-center w-10/12 mb-10 mx-auto md:mx-0">
          <span className="text-4xl font-semiboldbold ">
            Contact Our Dental Hospital.
          </span>
        </div>
        <div className=" text-center md:text-left">
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            className="w-10/12 bColr"
          />
        </div>
        <div className="text-center md:text-left  my-6">
          <TextField
            type={"email"}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-10/12 "
          />
        </div>
        {/* form div started here */}
        <div className="">
          <form className="w-10/12 mx-auto md:mx-0">
            <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-0 mx-0"
                  placeholder="Write your massage"
                  required=""
                ></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600 tAreaBtn">
                <button className="styleBtn">
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* location */}
      <div className="my-8 md:my-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.3744115805407!2d90.45326561543091!3d23.69831999667982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b746b83bfcdd%3A0x124bb54edb3d3805!2sAshraf%20Uz%20Mahim!5e0!3m2!1sen!2sbd!4v1663677293617!5m2!1sen!2sbd"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-10/12 md:w-full  mx-auto md:mx-0 min-h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Msg;
