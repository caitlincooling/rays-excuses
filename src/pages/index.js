import React from "react";
const picture = require("../assets/rayheader.png");

const Page = () => {
  const excuses = [
    "I have to see my mom",
    "I hurt myself at football",
    "I hurt myself climbing",
    "I have to play football",
    "I'm flying to America to see my brother",
    "I have to work late",
    "Why bother with an excuse? Just don't show up",
    "It's Joe's festival thing in his home town in Somerset",
    "I have Yoga",
    "I'm probably only going to finish this sid work at like 6.30ish 7ish"
  ];

  const generateExcuse = () => {
    const index = Math.floor(Math.random() * excuses.length);
    alert(excuses[index]);
  };

  return (
    <>
      <div className="wrapper row ">
        <div className="col-12">
          <img className="picture " src={picture} alt="a legend" />
        </div>
        <div className="container col-lg-12">
          <h1>Rays Excuses</h1>

          <p>Click to generate an excuse to get out of any social event</p>
          <button type="button" onClick={generateExcuse} class="btn btn-light">
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;