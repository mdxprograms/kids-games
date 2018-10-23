import React, { Component } from "react";

import HomeView from "./views/Home";
import TicTacToeView from "./views/TicTacToe";

import Header from "./components/Header";
import Button from "./components/Button";

import leoImg from "./images/users/leo.jpg";
import zoeImg from "./images/users/zoe.jpg";

class App extends Component {
  state = {
    currentUser: null,
    currentView: HomeView,
    users: [
      { name: "Leo", age: 5, favColor: "orange", image: leoImg },
      { name: "Zoe", age: 3, favColor: "pink", image: zoeImg }
    ],
    views: { home: HomeView, ticTacToe: TicTacToeView }
  };

  selectUser = user => this.setState(state => (state.currentUser = user));

  changeView = view => this.setState(state => (state.currentView = view));

  render() {
    const View = this.state.currentView;

    return (
      <div id="app">
        {this.state.currentView !== HomeView && (
          <Button
            styles={{ background: "silver" }}
            onClick={() => this.changeView(this.state.views.home)}
          >
            Go Back
          </Button>
        )}

        <Header appState={this.state} changeView={this.changeView} />
        <View appState={this.state} changeView={this.changeView} />
      </div>
    );
  }
}

export default App;
