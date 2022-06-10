import React from "react";
import DeleteBtn from "../List/deleteButton.js";

const ListItem = ({ list }) => {
  return (
    <li>
      {list.text}
      <DeleteBtn />
    </li>
  );
};
export default ListItem;
