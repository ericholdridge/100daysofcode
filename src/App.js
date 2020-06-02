/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { Component } from "react";

import Person from "../src/components/Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  // Original state
  state = {
    persons: [
      { id: "1", name: "Eric", age: 23 },
      { id: "2", name: "Kyle", age: 25 },
      { id: "3", name: "Mike", age: 29 },
    ],
    showPersons: false,
    animals: ["Dog", "Cat", "Gnat"],
  };

  // Delete a person component if use clicks on the persons component paragraph
  deletePersonsHandler = (index) => {
    // Copy the persons array using es6 spread operator
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  // Change the name based on users input
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  // Show and hide the person component if the button is clicked
  showPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                click={() => this.deletePersonsHandler(index)}
              />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App" css={styles}>
        <div className="container">
          <button onClick={this.showPersonsHandler}>Switch Name</button>
          {persons}
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
    button {
      margin: 10px 0;
    }
    .person_card {
    }
  }
`;

export default App;
