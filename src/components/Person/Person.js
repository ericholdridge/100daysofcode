/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";

const Person = (props) => {
  return (
    <div className="person_card" css={styles}>
      <p onClick={props.click}>
        My name is {props.name} and I'm {props.age}.
      </p>
      <input onChange={props.changed} value={props.name} type="text" />
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 400px;
  border: 1px solid #cecece;
  margin: 10px auto;
  border-radius: 4px;
  box-shadow: 0 8px 6px -6px black;
  padding: 10px 0 40px 0;
`;

export default Person;
