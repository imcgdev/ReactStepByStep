import React from "react";
import ReactDOM from "react-dom";
import Toggle from "./toggle.js";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    function FormattedDate(props) {
      return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    }

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
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome user={{ firstName: "Ian", lastName: "McGregor" }} />
        <Toggle></Toggle>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
