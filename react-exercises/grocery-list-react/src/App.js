import React, { useState } from "react";

import AddItem from "./AddItem";
import ListItem from "./ListItem";

import logo from "./logo.svg";
// import "./App.css";

function App() {
  const [groceryList, setGroceryList] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <AddItem setGroceryList={setGroceryList} />
      <ListItem groceryList={groceryList} />
    </div>
  );
}

export default App;
