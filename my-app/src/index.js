import React from "react";
import ReactDOM from "react-dom";

class Welcome extends React.Component {
  render() {
    function formatName(user) {
      return user.firstName + " " + user.lastName;
    }

    function getGreeting(user) {
      if (user) {
        return <h1>Hello, {formatName(user)}</h1>;
      }

      return <h1>Hello, Stranger</h1>;
    }

    return (
      <div className="element">
        {getGreeting(this.props.user)}
        <h2>Good to see you here!</h2>
        <h2>It is {this.props.time}.</h2>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome
          user={{ firstName: "Ian", lastName: "McGregor" }}
          time={new Date().toLocaleTimeString()}
        />
        <Welcome
          user={{ firstName: "Sarah", lastName: "Leffler" }}
          time={new Date().toLocaleTimeString()}
        />
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

setInterval(tick, 1000);
