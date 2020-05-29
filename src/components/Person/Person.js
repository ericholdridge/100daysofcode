import React from "react";

const Person = (props) =>  {
    return(
        <div>
            <p onClick={props.click}>My name is {props.name} and I'm {props.age}.</p>
        </div>
    )
}

export default Person;