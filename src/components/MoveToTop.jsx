import React from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useTheme } from "../constants/Theme";

function MoveToTop() {
  const { colors } = useTheme();
  return (
    <IconButton
      className="move-to-top"
      sx={{
        backgroundColor: colors?.primary,
        color: colors?.onSecondary,
      }}
    >
      <ArrowUpward />
    </IconButton>
  );
}

export default MoveToTop;
