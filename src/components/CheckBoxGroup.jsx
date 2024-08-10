import React from "react";
import Checkbox from "./Checkbox";
function CheckBoxGroup({ list }) {
  return (
    <div className="checkbox-group">
      {list.map((element, index) => {
        return (
          <Checkbox
            key={index}
            label={element}
            width={"150px"}
            height={"40px"}
          />
        );
      })}
    </div>
  );
}

export default CheckBoxGroup;
