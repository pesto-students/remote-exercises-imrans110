import React, { useState } from "react";

const AddItem = ({ setGroceryList }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      Add Item
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => setGroceryList((prevList) => [...prevList, inputText])}
      >
        Add
      </button>
      <button>Clear Items</button>
    </div>
  );
};

export default AddItem;
