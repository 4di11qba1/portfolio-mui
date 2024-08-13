import React from "react";
import { IconButton } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useTheme } from "../constants/Theme";

function MoveToTop({ moveToTop }) {
  const { colors } = useTheme();
  return (
    <IconButton
      className="move-to-top"
      sx={{
        backgroundColor: colors?.primary,
        color: colors?.onSecondary,
      }}
      onClick={() => moveToTop()}
    >
      <ArrowUpward />
    </IconButton>
  );
}

export default MoveToTop;
