import React from "react";
import Image from "next/image";
import "@/styles/navbar.css";
import bulbIcon from "@/public/assets/icons/bulb 2.svg";
import pathIcon from "@/public/assets/icons/Path 2.svg";

function Navbar() {
  return (
    <div className="NavBar_box">
      <div
        className="NavBar_rectangle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1.5rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Image src={bulbIcon} width="1.4375rem" height="1.5rem" alt="icon" />
          </div>
          <div className="Navbar_text">6 Suggestions</div>
          <div
            style={{
              color: "#f2f4fe",
              fontFamily: " Jost-Regular",
              fontSize: "14px",
              fontWeight: "400",
              opacity: "0.75",
            }}
          >
            <span className="sort-by">Sort by :</span>
            <span className="upvotes"> Most Upvotes</span>
          </div>
          <Image src={pathIcon} width="0.5rem" height="0.25rem" />
        </div>

        <div className="Navbar_button">
          <div className="Navbar_button-text">
            <div className="Navbar_text-wrapper">+ Add Feedback</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
