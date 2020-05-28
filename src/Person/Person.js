import React from "react";

const Person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I'm a {props.name} and I'm {Math.floor(Math.random() * 30)} years old.</p>
            {props.children}
        </div>
    )
}

export default Person;