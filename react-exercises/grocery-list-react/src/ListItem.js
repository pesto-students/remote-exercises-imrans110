import React from "react";

const ListItem = ({ groceryList }) => {
  console.log({ groceryList });
  return groceryList.map((item, index) => <h3 key={index}>{item}</h3>);
};

export default ListItem;
