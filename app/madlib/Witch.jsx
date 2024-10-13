'use client'

import { useState } from "react";
import {actions, landForms, adjectives, colors, verbs, liquids, animals, instructions} from './dictionary';

function Witch() {
  const [formData, setFormData] = useState({
    actionChoice: "",
    landFormChoice: "",
    adjectiveChoice: "",
    colorChoice: "",
    verbChoice: "",
    liquidChoice: "",
    adjective2Choice: "",
    color2Choice: "",
    animalChoice: "",
  });

  const [paragraph, setParagraph] = useState("");

  const madLibGenerator = (
    action,
    landForm,
    adjective,
    color,
    verb,
    liquid,
    adjective2,
    color2,
    animal
  ) => {
    return action &&
      landForm &&
      adjective &&
      color &&
      verb &&
      liquid &&
      adjective2 &&
      color2 &&
      animal
      ? "I met a witch when I was " +
          action.toLowerCase() +
          " in the " +
          landForm.toLowerCase() +
          ". She was extremely " +
          adjective.toLowerCase() +
          " and her eyes were so " +
          color.toLowerCase() +
          " it made me " +
          verb.toLowerCase() +
          ". She gave me " +
          liquid.toLowerCase() +
          " to drink and I immediately turned into a " +
          adjective2.toLowerCase() +
          " " +
          color2.toLowerCase() +
          " " +
          animal.toLowerCase() +
          "!"
      : "Please choose a word in each category before submitting.";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setParagraph(
      madLibGenerator(
        formData.actionChoice,
        formData.landFormChoice,
        formData.adjectiveChoice,
        formData.colorChoice,
        formData.verbChoice,
        formData.liquidChoice,
        formData.adjective2Choice,
        formData.color2Choice,
        formData.animalChoice
      )
    );
  };

  const handleReset = () => {
    setFormData({
      actionChoice: "",
      landFormChoice: "",
      adjectiveChoice: "",
      colorChoice: "",
      verbChoice: "",
      liquidChoice: "",
      adjective2Choice: "",
      color2Choice: "",
      animalChoice: "",
    });
    setParagraph("");
  };

  const handleRandom = () => {
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomLandForm =
      landForms[Math.floor(Math.random() * landForms.length)];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomLiquid = liquids[Math.floor(Math.random() * liquids.length)];
    const randomAdjective2 =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

    setFormData({
      actionChoice: randomAction,
      landFormChoice: randomLandForm,
      adjectiveChoice: randomAdjective,
      colorChoice: randomColor,
      verbChoice: randomVerb,
      liquidChoice: randomLiquid,
      adjective2Choice: randomAdjective2,
      color2Choice: randomColor2,
      animalChoice: randomAnimal,
    });

    setParagraph(
      madLibGenerator(
        randomAction,
        randomLandForm,
        randomAdjective,
        randomColor,
        randomVerb,
        randomLiquid,
        randomAdjective2,
        randomColor2,
        randomAnimal
      )
    );
  };

  return (
    <>
      <p>{instructions}</p>
      <form>
          <label htmlFor="action-choice">Action (-ing):</label>
          <input
            list="actions"
            id="action-choice"
            name="actionChoice"
            value={formData.actionChoice}
            onChange={handleChange}
          />
          <datalist id="actions">
            {actions.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="landForm-choice">Land Form:</label>
          <input
            list="landForms"
            id="landForm-choice"
            name="landFormChoice"
            value={formData.landFormChoice}
            onChange={handleChange}
          />
          <datalist id="landForms">
            {landForms.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
          <br/>
          <label htmlFor="adjective-choice">Adjective:</label>
          <input
            list="adjectives"
            id="adjective-choice"
            name="adjectiveChoice"
            value={formData.adjectiveChoice}
            onChange={handleChange}
          />
          <datalist id="adjectives">
            {adjectives.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="color-choice">Color:</label>
          <input
            list="colors"
            id="color-choice"
            name="colorChoice"
            value={formData.colorChoice}
            onChange={handleChange}
          />
          <datalist id="colors">
            {colors.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="verb-choice">Verb (example: run):</label>
          <input
            list="verbs"
            id="verb-choice"
            name="verbChoice"
            value={formData.verbChoice}
            onChange={handleChange}
          />
          <datalist id="verbs">
            {verbs.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="liquid-choice">Liquid:</label>
          <input
            list="liquids"
            id="liquid-choice"
            name="liquidChoice"
            value={formData.liquidChoice}
            onChange={handleChange}
          />
          <datalist id="liquids">
            {liquids.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="adjective2-choice">Adjective:</label>
          <input
            list="adjectives2"
            id="adjective2-choice"
            name="adjective2Choice"
            value={formData.adjective2Choice}
            onChange={handleChange}
          />
          <datalist id="adjectives2">
            {adjectives.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
        <br/>
          <label htmlFor="color2-choice">Color:</label>
          <input
            list="colors2"
            id="color2-choice"
            name="color2Choice"
            value={formData.color2Choice}
            onChange={handleChange}
          />
          <datalist id="colors2">
            {colors.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
<br/>
          <label htmlFor="animal-choice">Animal:</label>
          <input
            list="animals"
            id="animal-choice"
            name="animalChoice"
            value={formData.animalChoice}
            onChange={handleChange}
          />
          <datalist id="animals">
            {animals.map((word) => (
              <option value={word} key={word} />
            ))}
          </datalist>
      </form>
      <p>{paragraph}</p>
      <div className="button-section">
        <button className="generate" onClick={handleSubmit}>
          Generate MadLib
        </button>
        <button onClick={handleRandom}>Surprise me!</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};
export default Witch;