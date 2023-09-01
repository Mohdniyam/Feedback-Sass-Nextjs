import React from "react";
import "@/styles/filtersidebar.css";

export function FilterSideBar() {
  return (
    <div className="filter_sidebar">
      <div className="sidebar_rectangle">
        <div className="small-rectangle" style={{ marginLeft: "1.5rem" }}></div>
        <div className="small-rectangle"></div>
        <div className="small-rectangle"></div>
      </div>
    </div>
  );
}
export function FilterRoadmap() {
  return (
    <div className="filter_sidebar">
      <div className="sidebar_rectangle">
        {/* <div
          style={{
            display: "flex",
            alignSelf: "start",
            justifyContent: "space-between",
            width: "18rem",
            padding: "1.19rem 1.5rem 1.5rem",
          }}
        >
          <div>Roadmap</div>
          <div>View</div>
          <br />
          <div>niyam</div>
        </div>
     */}

        <table className="table-auto">
          <thead>
            <tr>
              <th>Roadmap</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planned</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
