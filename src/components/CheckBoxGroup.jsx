import React from "react";
import Checkbox from "./Checkbox";
import { motion } from "framer-motion";
import { useTheme } from "../constants/Theme";
function CheckBoxGroup({ list }) {
  const { transition } = useTheme();
  return (
    <div className="checkbox-group">
      {list.map((element, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: (list.length - index + 1) * 0.2,
            }}
          >
            <Checkbox
              key={index}
              label={element}
              width={"150px"}
              height={"40px"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default CheckBoxGroup;
