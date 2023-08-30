import React from "react";
import Image from "next/image";
import oval from "@/public/assets/images/Oval.svg";

function FeedBackBoard() {
  return (
    <div>
      <div className="box">
        <Image className="oval" alt="Oval" src={oval} />
        <div className="group">
          <div className="text-wrapper">Eqaim</div>
          <div className="div">Feedback Board</div>
        </div>
      </div>
    </div>
  );
}

export default FeedBackBoard;
