import React, { useState } from "react";

import AddItem from "./components/AddItem/AddItem";
import ListItem from "./components/ListItem/ListItem";

// import "./App.css";

function App() {
  const [groceryList, setGroceryList] = useState([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <AddItem groceryList={groceryList} setGroceryList={setGroceryList} />
      <ListItem groceryList={groceryList} setGroceryList={setGroceryList} />
    </div>
  );
}

export default App;
