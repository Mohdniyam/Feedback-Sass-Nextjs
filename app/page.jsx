import React from "react";
import FeedBackBoard from "@/components/feedBackBoard";
import Navbar from "@/components/Navbar";
import FeedBackCard from "@/components/FeedBackCard";
import data from "@/constants/data.json";

function Home() {
  return (
    <section
      className="w-full flex-center flex-col section-1"
      style={{ display: "flex", gap: "1.6rem" }}
    >
      <div style={{}}>
        <FeedBackBoard />
      </div>
      <div style={{ width: "80%" }}>
        <Navbar />
        <FeedBackCard />
      
      </div>
    </section>
  );
}

export default Home;
