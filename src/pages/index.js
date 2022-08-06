import React from "react";
const picture = require("../assets/ray.png");

const Page = () => {
  const excuses = [
    "I have to see my mom",
    "I hurt myself at football",
    "I hurt myself climbing",
    "I have to play football",
    "I'm flying to America to see my brother",
    "I have to work late",
    "Why bother with an excuse? Just don't show up"
  ];

  const generateExcuse = () => {
    const index = Math.floor(Math.random() * excuses.length)
    alert(excuses[index]);
  };

  return (
    <>
      <img className="picture" src={picture} alt="a legend" />
      <h1>Rays Excuses</h1>
      <p>Click to generate an excuse to get out of any social event</p>
      <button onClick={generateExcuse}>Generate</button>
    </>
  );
};

export default Page;
