import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "feedback web page",
  description: "Feel free to send feedback",
};

function Rootlayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default Rootlayout;
