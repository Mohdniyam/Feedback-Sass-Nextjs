import React from "react";
import "@/styles/filtersidebar.css";

export function FilterSideBar() {
  return (
    <div className="filter_sidebar">
      <div className="sidebar_rectangle">
        <div className="small-rectangle" style={{marginLeft:"1.5rem"}}></div>
        <div className="small-rectangle"></div>
        <div className="small-rectangle"></div>
      </div>
    </div>
  );
}
export function FilterRoadmap() {
  return (
    <div className="filter_sidebar">
      <div className="sidebar_rectangle"></div>
    </div>
  );
}
