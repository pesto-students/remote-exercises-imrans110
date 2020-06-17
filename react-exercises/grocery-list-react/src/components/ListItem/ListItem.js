import React from "react";
import "./ListItem.css";

const ListItem = ({ groceryList, setGroceryList }) => {
  const handItemClick = (index) => {
    setGroceryList([
      ...groceryList.slice(0, index),
      {
        ...groceryList[index],
        purchaseStatus: !groceryList[index].purchaseStatus,
      },
      ...groceryList.slice(index + 1),
    ]);
  };

  return (
    <ul>
      {groceryList.map((item, index) => (
        <li
          className="card"
          onClick={() => handItemClick(index)}
          style={{
            color: item.purchaseStatus ? "red" : "black",
            cursor: "pointer",
          }}
          key={index}
        >
          <div>
            {item.name}{" "}
            <span>
              <b>{item.count}</b>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
