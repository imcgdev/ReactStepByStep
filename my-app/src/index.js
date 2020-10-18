import React from "react";
import ReactDOM from "react-dom";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>;
  }

  return <h1>Hello, Stranger</h1>;
}

const user = {
  firstName: "Ian",
  lastName: "McGregor",
};

const element = (
  <div className="element">
    {getGreeting(user)}
    <h2>Good to see you here!</h2>
  </div>
);

const sameElement = React.createElement(
  "div",
  { className: "element" },
  getGreeting(user),
  <h2>Good to see you here!</h2>
);

ReactDOM.render(sameElement, document.getElementById("root"));
