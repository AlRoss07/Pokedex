import React, { Component } from "react";

import "./App.css";
import Pokedex from "./Pokedex";
import Pokegame from "./Pokegame";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pokedex /> */}
        <Pokegame />
      </div>
    );
  }
}

// function App() {
//   return (

//   );
// }

// export default App;
