import React, { Component } from "react";
import "./App.css";

const HEROES = [
  { id: 11, name: "Mr. Nice" },
  { id: 12, name: "Narco" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" }
];

class App extends Component {
  state = {
    selectedHero: {
      name: "",
      id: undefined
    }
  };
  handleSelectedHero = a => {
    console.log(a.name);
    this.setState({
      selectedHero: a
    });
  };

  //change to her input on selected her form
  handleInputChange = event => {
    this.setState({
      selectedHero: {
        ...this.state.selectedHero,
        name: event.target.value
      }
    });
  };
  // const App = () => {
  //   const handleSelectedHero = a => {
  //     console.log(a.name);
  //   };

  render() {
    const heroesListReactElements = HEROES.map(a => (
      <li key={a.id} onClick={() => this.handleSelectedHero(a)}>
        <span className="badge">{a.id}</span>
        {a.name}
      </li>
    ));

    return (
      <div className="App">
        <h1>React Heroes</h1>
        <ul className="heroes">{heroesListReactElements}</ul>
        <div>
          <label>ID: </label>
          {this.state.selectedHero.id}
          <label>Name: </label>
          {this.state.selectedHero.name}
        </div>
        <form>
          <label>Hero Name: </label>
          <input
            type="text"
            value={this.state.selectedHero.name}
            onChange={e => this.handleInputChange(e)}
          />
          <input className="button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default App;
