import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function ThumbHorizontal({ title, image, sidePadding }) {
  const bkground = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div className={sidePadding}>
        <div
          style={bkground}
          className="rounded-xl shadow-slate-900 shadow-md w-56 h-56 mt-3 ">
          <span className="flex justify-center relative top-20">
            <PlayCircleIcon className="h-12 w-12 bg-red-700 rounded-full" />
          </span>
        </div>
        <div className="text-center mt-2">
          <h1 className=" tracking-wider text-lg">{title}</h1>
        </div>
      </div>
    </>
  );
}
