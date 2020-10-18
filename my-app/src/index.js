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

function tick() {
  const element = (
    <div className="element">
      {getGreeting(user)}
      <h2>Good to see you here!</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  const nonJSX = React.createElement(
    "div",
    { className: "element" },
    getGreeting(user),
    <h2>Good to see you here!</h2>
  );

  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
