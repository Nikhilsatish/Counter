import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0,
      shouldUpdate: true
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCount = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    if (this.state.shouldUpdate) {
      this.setState((prevState) => ({ count1: prevState.count1 + 1 }));
    }
  };

  playPause = () => {
    this.setState((prevState) => ({
      shouldUpdate: !prevState.shouldUpdate
    }));
  };

  render() {
    const container = {
      margin: "10% 40%",
      width: "100px",
      height: "100px",
      padding: "10% 45px",
      border: "1px solid black",
      backgroundColor: "lightgrey"
    };
    const btn = {
      width: "100%",
      height: "30px",
      cursor: "pointer"
    };
    console.log("render");
    return (
      <div style={container}>
        <div style={{ paddingBottom: "10px", float: "left" }}>
          <label>Counter: {this.state.count}</label>
        </div>
        <div style={{ paddingBottom: "30px", float: "left" }}>
          <label>Counter1: {this.state.count1}</label>
        </div>
        <button style={btn} type="submit" onClick={this.playPause}>
          {this.state.shouldUpdate ? "Pause" : "Play"}
        </button>
      </div>
    );
  }
}

export default Counter;
