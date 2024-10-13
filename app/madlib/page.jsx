'use client'

import "./madlib.css";
import Witch from "./Witch";
import Zoo from "./Zoo";
import { useState } from "react";

export default function MadLibGame() {

  const [story, setStory] = useState("Sentence");

  const handleWitch = () => {
    setStory("Witch")
  };

  const handleZoo = () => {
    setStory("Zoo")
  };

  return (
      <div id="madlibgame">
        <h1>Mad Lib</h1> 
        <div className="button-section">
        <button className="story-button" onClick={handleWitch}>Witch</button>
        <button className="story-button" onClick={handleZoo}>Zoo</button>
      </div>  
      {story == "Zoo" ? <Zoo /> : <Witch />}
      </div>
  );
};