'use client'

import "./madlib.css";
import Witch from "./Witch";
import Zoo from "./Zoo";
import { useState } from "react";

export default function MadLibGame() {

  const [story, setStory] = useState("Witch");

  const stories = ["Witch", "Zoo"];

  const storyButtons = stories.map(item => <button name={item} key={item} className={story==item ? "selected" : "unselected"} onClick={(e)=> handleClick(e)}>{item} Story</button>);
 
  const handleClick = (e) => {
    setStory(e.target.name);
  };

  return (
      <div id="madlibgame">
        <h1>Mad Lib</h1> 
        <div className="button-section">
        {storyButtons}
        </div>  
        {story == "Zoo" ? <Zoo /> : <Witch />}
      </div>
  );
};