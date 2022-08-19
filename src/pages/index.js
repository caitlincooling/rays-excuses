import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
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
    "I have Yoga"
  ];

  const generateExcuse = () => {
    const index = Math.floor(Math.random() * excuses.length)
    alert(excuses[index]);
  };

  return (
    <>
      <img className="picture" src={picture} width="100%" alt="a legend" />
      <center>
      <div className="container">
      <h1>Rays Excuses</h1>
      <p>Click to generate an excuse to get out of any social event</p>
      <button onClick={generateExcuse}>Generate</button>
      </div>
      </center>
    </>
  );
};

export default Page;
