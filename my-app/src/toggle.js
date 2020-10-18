import React from "react";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggledOn: true };
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggledOn: !state.isToggledOn,
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {" "}
        {this.state.isToggledOn ? "ON" : "OFF"}
      </button>
    );
  }
}
