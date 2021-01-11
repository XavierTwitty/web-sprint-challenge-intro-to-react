// Write your Character component here
import React from "react";

const Character = (props) => {
  return (
    <div className="character-card">
      <div>
        <h2>{props.character.name}</h2> <p>{props.character.birth_year}</p>
      </div>
    </div>
  );
};

export default Character;
