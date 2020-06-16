import React from "react";

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
          onClick={() => handItemClick(index)}
          style={{
            color: item.purchaseStatus ? "red" : "black",
            cursor: "pointer",
          }}
          key={index}
        >
          {item.name}{" "}
          <span>
            <b>{item.count}</b>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
