import React, { useState } from "react";

import "./AddItem.css";

const AddItem = ({ setGroceryList, groceryList }) => {
  const [itemName, setItemName] = useState("");
  const isItemExists = groceryList.find(
    (item) => item.name === itemName.trim()
  );

  function addItemToGroceryList() {
    if (!isItemExists) {
      setGroceryList((prevList) => [
        ...prevList,
        { name: itemName.trim(), count: 1, purchaseStatus: false },
      ]);
    } else {
      setGroceryList((prevList) =>
        prevList.map((item) =>
          item.name === itemName.trim()
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    }
    setItemName("");
  }

  function clearGroceryList() {
    setGroceryList([]);
  }

  return (
    <div className="inline">
      <label htmlFor="item">Item Name</label>
      <input
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        type="text"
        placeholder="Enter grocery item name"
        id="item"
        name="item"
      />
      <br></br>
      <button disabled={!itemName} onClick={() => addItemToGroceryList()}>
        Add Item
      </button>
      <button disabled={!groceryList.length} onClick={() => clearGroceryList()}>
        Clear Items
      </button>
    </div>
  );
};

export default AddItem;
