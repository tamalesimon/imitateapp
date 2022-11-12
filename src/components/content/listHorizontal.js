import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import ThumbHorizontal from "./thumbHorizontal";
import "../../styles/noscrollbar.css";

export default function ListHorizontal() {
  const sidePadding = "ml-6 sm:ml-8 md:ml-4";
  return (
    <>
    <div>
      
    </div>
      <h1 className="mt-3">Recently Added</h1>
      <div
        className="flex items-center min-w-screen overflow-x-auto no-scrollbar"
        style={{}}>
        <ThumbHorizontal
          image={"https://picsum.photos/id/231/200"}
          title={"Supernatural Change"}
        />
        <ThumbHorizontal
          image={"https://picsum.photos/id/225/200"}
          title={"Unmasking the Enemy"}
          sidePadding={sidePadding}
        />
        <ThumbHorizontal
          image={"https://picsum.photos/id/236/200"}
          title={"Discipleship"}
          sidePadding={sidePadding}
        />
        <ThumbHorizontal
          image={"https://picsum.photos/id/235/200"}
          title={"New Creationg and His"}
          sidePadding={sidePadding}
        />
        <ThumbHorizontal
          image={"https://picsum.photos/id/230/200"}
          title={"New Creationg and His"}
          sidePadding={sidePadding}
        />
        <ThumbHorizontal
          image={"https://picsum.photos/id/25/200"}
          title={"New Creationg and His"}
          sidePadding={sidePadding}
        />
        {/* <span>
            <h1 className='tracking-wider text-lg ml-6 cursor-pointer'>more</h1>
        </span> */}
      </div>
    </>
  );
}
