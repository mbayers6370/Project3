import React from "react";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <div className="title">Welcome, "code for name here"</div>
      <div className="container">
        <div className="home-tile">
          <h2>Attendance</h2>
          <div className="tile-container">Data Here?</div>
        </div>
        <div className="home-tile">
          <h2>Grades</h2>
          <div className="tile-container">Data Here?</div>
        </div>
        <div className="home-tile">
          <h2>Virtual Classroom</h2>
          <div className="tile-container">Data Here?</div>
        </div>
        <div className="home-tile">
          <h2>Create an Assignment</h2>
          <div className="tile-container">Data Here?</div>
        </div>
      </div>
    </div>
  );
}

export default Home;