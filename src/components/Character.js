// Write your Character component here
import React from "react";
import { Wrapper } from "./styledComponets";

const Character = (props) => {
  return (
    <div className="character-card">
      <Wrapper>
        <h2>{props.character.name}</h2> <p>{props.character.birth_year}</p>
      </Wrapper>
    </div>
  );
};

export default Character;
