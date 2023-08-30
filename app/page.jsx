import React from "react";
import FeedBackBoard  from "@/components/feedBackBoard";
import Navbar from "@/components/Navbar"

function Home() {
  return (
    <section 
      className="w-full flex-center flex-col section-1"
      style={{ display: "flex", gap: "1.6rem" }}
    >
      <div style={{ height: "95vh" }}>
        <FeedBackBoard />
      </div>
      <div style={{  width: "51.5625rem" }}>
        <Navbar/>
      </div>
    </section>
  );
}

export default Home;
