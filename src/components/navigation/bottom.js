import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faHouse, faListSquares, faBookmark, faGear, faGlobe } from '@fortawesome/free-solid-svg-icons'
import "../../styles/bottom.css";

const Bottom = () => {
  return (
    <>
      <div className="bottom-nav rounded-t-lg p-4 bg-zinc-900 container align-middle .fixed z-50 object-bottom inset-0 mt-4">
        <div className="flex justify-between align-middle items-center mt-4">
            <FontAwesomeIcon icon={faHouse} className="text-2xl" />
            <FontAwesomeIcon icon={faListSquares} className="text-2xl" />
            <FontAwesomeIcon icon={faBookmark} className="text-2xl" />
            <FontAwesomeIcon icon={faGlobe} className="text-2xl" />
            <FontAwesomeIcon icon={faGear} className="text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Bottom;
