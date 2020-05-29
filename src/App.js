/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";

import Person from "../src/components/Person/Person";

class App extends Component {
  // Original state
  state = {
    persons: [
      {name: "Eric", age: 23},
      {name: "Kyle", age: 25},
      {name: "Mike", age: 29},
    ]
  }

  // Change name on button click
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "Kyle", age: 25},
        {name: "Mike", age: 29},
      ]
    })
  }

  render() {
    return (
      <div className="App" css={styles}>
        <div className="container">
          <button onClick={this.switchNameHandler.bind(this, "Eric Holdridge")}>Switch Name</button>
          <Person
          click={this.switchNameHandler}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>Child</Person>
          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div>
      </div>
    );
  }
}

const styles = css`
  width: 100%;
  text-align: center;
  .container {
    width: 100%;
    max-width: 600px;
    margin: auto;
    border: 1px solid red;
    button {
      margin: 10px 0;
    }
  }
`;

export default App;