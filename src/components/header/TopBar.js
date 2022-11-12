import React, { useState } from "react";
import { SearchCircle } from "../../assets/customicons.js";
import { ChevronRightIcon, ChevronLeftIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import ListHorizontal from "../content/listHorizontal.js";
import "../../styles/bottom.css";

const TopBar = () => {
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const toggleSearch = () => setIsOpened(!isOpened);

  return (
    <>
      <div className="">
        <div className="fixed z-50">
          <div className="flex flex-row justify-between items-center bottom-nav p-4 rounded-t-full">
            <div className="flex items-center justify-between w-full">
              <div>
                <svg
                  viewBox="42.225 31.7 45.792 36.742"
                  width="45.792"
                  height="36.742">
                  <g transform="matrix(0.227171, 0, 0, 0.227171, 32.632694, 24.498663)">
                    <path
                      class="st0"
                      fill="#000"
                      width="12px"
                      d="M133.1,83.3c-6.6-1.5-13.5-0.7-19.6,2.4c-6.1,3-12.5,10.3-14.4,16.5c-4.2,13.9,3.7,28.1,18.5,33.2
                    c4.8,1.7,13.5,1.8,17.6,0.2c10.8-4.1,16.8-10.4,19.4-20.3c2.6-10.3-2.1-21.3-12.2-28C139.6,85.3,136.5,83.9,133.1,83.3z"></path>
                    <path
                      class="st0"
                      fill="#000"
                      d="M139,70c-1.8-0.2-4.5-0.6-6.1-0.9c-8.5-1.8-26.1,0.3-34.6,4.1c-3.1,1.3-6.2,2.8-9.1,4.5c-0.5,0.4-1,0.7-1.6,1
                    c-4,2-11.6,8.9-15.9,14.2c-2.5,3.2-7.7,11.7-8.1,13.5c-0.2,0.7-0.4,1.4-0.7,2c-0.5,0.7-2.4,7.1-3.2,10.8c-1,4.5-0.8,16.8,0.3,22.1
                    c0.3,1.7,0.7,3.4,1.4,5c0.4,0.5,0.5,1.2,0.5,1.8c0,4.6,9.1,18.8,16.9,26.2c5.4,5.2,17.3,11.9,26.2,14.8c5.1,1.8,10.4,3,15.8,3.6
                    c13,1.6,26.2,0.6,38.7-3.1c7.7-2.8,15.2-6.5,22.1-10.9c2.6-1.8,5-3.5,5.3-3.8c0.5-0.4,2.5-2.2,5.4-4.5c0.3-0.3,12.5-13.9,17.8-19.9
                    c1.2-1.3,2.4-2.8,3.3-4.3c0-0.3-1.1-1.3-2.4-2.2c-0.9-0.6-1.7-1.3-2.4-2.1c0-0.2-0.3-0.4-0.5-0.4c-2.6-1.7-5.1-3.6-7.3-5.8
                    c-0.8-0.8-1.7-1.5-2.6-2.2c-4.2-3.3-10.2-8.1-10.5-8.4c-0.2-0.1-0.9-0.6-1.6-1.1c-1.6-1-0.8-1.7-10,8.7c-8.1,9.2-13.2,14.5-14,14.5
                    c-0.3,0-0.7,0.1-0.9,0.4c-0.6,1.6-10.5,6.8-15.4,8.1c-4.7,1.3-15.5,1.8-20.7,1c-4.1-0.6-12.3-3.1-12.6-3.8
                    c-0.1-0.2-0.3-0.4-0.6-0.4c-1.7,0-12.2-7.8-14.4-10.7c-0.7-0.9-1.8-2.2-2.4-2.9c-1.8-2.1-5.8-10.6-6.9-14.8
                    c-1.6-6.1-1.4-14.6,0.5-22.1c1.1-4.5,5.4-12.1,9.3-16.5c3-3.4,11.9-9.7,15-10.7c0.6-0.1,1.2-0.4,1.6-0.8c1.9-0.7,3.8-1.3,5.8-1.8
                    c8.1-2.2,16.6-2.3,24.7-0.2l-3.5-1.8C140.7,70.2,139.9,70.1,139,70z"></path>
                    <path
                      class="st1"
                      fill="#FD0103"
                      d="M215.1,78.6c-5.1-4-11.6-9.3-14.5-11.7s-7.2-6-9.7-7.9s-5.8-4.6-7.4-5.9c-10.8-8.8-19.1-13.6-29-16.8
                    c-2.4-0.8-5-1.6-5.7-1.9c-2.2-0.7-4.5-1.2-6.8-1.6c-4.6-0.9-7.5-1.1-15.9-1.1c-13.5,0-19.2,1-31.1,5.3c-9.5,3.4-18.3,8.5-25.8,15.2
                    c-13.4,11.5-21.9,25.9-26,44.1c-1.3,6-1.3,22.9,0,29c1.3,5.9,3.4,12.8,4.5,15c0.5,1,1.5,2.9,2.1,4.3c2.8,6.2,10,16.1,15.7,21.7
                    c3.2,3.2,4,3,0.9-0.3c-10.7-11.3-16.4-29.2-14.6-45.3c1.4-13.7,7.5-26.6,17.4-36.2c13.1-13.2,31.3-20.3,49.9-19.4
                    c7.7,0.4,18.5,2.6,21.7,4.4c0.2,0.1,0.4,0.3,0.6,0.4c1.7,0.6,3.3,1.4,4.7,2.4c0.4,0.1,0.8,0.2,1.2,0.4c2.7,0.9,9.9,5.7,13.2,8.7
                    c3.8,3.5,8.8,7.6,13.9,11.6c5.6,4.3,8.7,6.8,10.3,8.2c1.4,1.2,9.6,7.9,14.7,11.9c1.7,1.3,6.8,5.4,11.4,9.1s8.5,6.7,8.7,6.7
                    s3.6-3.7,7.6-8.2s9.4-10.6,12-13.5l4.7-5.3l-2.5-2.1C238.6,97.4,229.9,90.4,215.1,78.6z"></path>
                  </g>
                </svg>
              </div>
              <div className="flex items-center">
              <h4>Godwin Ssesazi</h4>
              <span className="mt-1">
                <ChevronDownIcon className="ml-1 h-4 w-4 text-black"/>
              </span>
              {/* <div class="overflow-hidden p-1 bg-black rounded-full dark:bg-gray-600">
                <img className="rounded-full w-10 h-10" src="https://i.pravatar.cc/50" alt="profile"/>
              </div> */}
              
              </div>
              
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <span className=" rounded-full p-1 border border-slate-900 bg-black">
                <ChevronLeftIcon className="h-4 w-4 text-white" />
              </span>
              <span className="rounded-full p-1 border border-slate-900 ml-2 bg-black">
                <ChevronRightIcon className="h-4 w-4 text-white" />
              </span>
            </div>
            <div className={isOpened ? "sm:mr-8 md:mr-0" : "sm:mr-8 md:mr-0"}>
              <div className="relative z-50 ">
                {" "}
                {/* z-50  */}
                <button
                  onClick={() => toggleSearch()}
                  className={
                    isOpened
                      ? "absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer"
                      : "pl-3 flex items-center cursor-pointer"
                  }>
                  {" "}
                  {/* absolute inset-y-0 left-0  */}
                  <SearchCircle
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
                <input
                  className={
                    isOpened
                      ? "w-full bg-gray-50 pl-10 pr-3 py-2 focus:outline-none border border-gray-300 rounded-full leading-5 sm:text-sm transition duration-300 ease-in-out"
                      : "hidden w-full bg-gray-50 pl-10 pr-3 py-2 focus:outline-none focus:bg-white focus:text-gray-900 rounded-full leading-5 sm:text-sm transition duration-200 ease-in-out"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
