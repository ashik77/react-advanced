import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";

class App extends Component {
  //method for updating the state
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Ashik" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: { name: null } };

  render() {
    return (
      <UserContext.Provider
        value={{
          currentUser: this.state.currentUser,
          onLoggedIn: this.handleLoggedIn,
        }}
      >
        <div>
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
