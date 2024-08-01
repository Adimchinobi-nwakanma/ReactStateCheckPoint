import React, { Component } from "react";
import Profile from "./components/Profile";
import { Button } from "@mui/material";

// App Class component
export default class App extends Component {
  // constructor method to initiate mounting phase of component's life cyle
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      shows: false,
      counter: 0,
    };
  }

  // function to be triggered when 'toggle' button is clicked
  profileBtnHandler = () =>
    // logic to change state of object when button is clicked
    this.state.shows
      ? this.setState({ shows: false, person: null })
      : this.setState({ shows: true, person: <Profile /> });

  // componentdidmount method to call setinterval immediately component is rendered
  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({ counter: this.state.counter + 1 }),
      1000
    );
  }

  // optional unmount method to clear timer
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // render phase
  render() {
    return (
      <div className="grid place-items-center space-y-4 p-4">
        <p>
          Time Since Component Mount:{" "}
          <span className="text-red-600 font-bold">{this.state.counter}s</span>
        </p>
        <Button
          onClick={this.profileBtnHandler}
          variant="contained"
          color="warning"
        >
          Toggle Profile Display
        </Button>
        {this.state.person}
      </div>
    );
  }
}
