import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="images/sidra2.jpg"
            style={{ borderRadius: "100%" , height:"50%" , width:"45%" }}
          />
          <h4 className="mt-5">Sidra Akhtar</h4>
          <h6>Frontend Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          A dedicated Front-End Developer with strong skills in HTML, CSS, and JavaScript. I have successfully built projects like a Simon Game using JavaScript and a Zerodha-like platform for front-end practice.
          </p>
          <p>
          Currently, I am enhancing my skills in MERN Stack Development through an internship, focusing on React.js and API integration. 
          </p>
          <p>Passionate about building user-friendly, responsive web applications and eager to grow in both front-end and back-end development.</p>
          <p>
            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> /{" "}
            <a href="" style={{textDecoration:"none"}}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;