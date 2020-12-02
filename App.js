import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { render } from "react-dom";

import Navigator from "./routes/navigatorstack";

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
