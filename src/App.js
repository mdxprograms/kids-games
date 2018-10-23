import React, { Component } from "react";

import HomeView from "./views/Home";
import TicTacToeView from "./views/TicTacToe";

import Header from "./Header";

class App extends Component {
  state = {
    currentUser: null,
    currentView: HomeView,
    users: [
      { name: "Leo", age: 5, favColor: "orange" },
      { name: "Zoe", age: 3, favColor: "pink" }
    ],
    views: { home: HomeView, ticTacToe: TicTacToeView }
  };

  selectUser = user => this.setState(state => (state.currentUser = user));

  changeView = view => this.setState(state => (state.currentView = view));

  render() {
    const View = this.state.currentView;

    return (
      <div id="app">
        <Header appState={this.state} changeView={this.changeView} />
        <View appState={this.state} selectUser={this.selectUser} />
      </div>
    );
  }
}

export default App;
