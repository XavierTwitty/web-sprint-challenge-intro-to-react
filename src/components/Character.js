// Write your Character component here
import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid green;
`;

const Character = (props) => {
  return (
    <Wrapper>
      <h2>{props.character.name}</h2> <p>{props.character.birth_year}</p>
    </Wrapper>
  );
};

export default Character;
