import React from 'react';
import {render} from 'react-dom'
import { Pet } from './Pet';

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Bambi",
  //     animal: "Dog",
  //     breed: "Maltese",
  //   }),
  //   React.createElement(Pet, { name: "Tikka", animal: "Cat", breed: "Mixed" }),
  // ]);

  return(
    <div>
      <h1>Adopt me</h1>
      <Pet name = "Luna" animal ="Dog" breed = "Havanese" />
      <Pet name = "Bambi" animal ="Dog" breed = "Maltese Terrier" />
      <Pet name = "Tikka" animal ="Cat" breed = "Mixed" />
    </div>
  )
};

render(<App/>, document.getElementById("root"));
