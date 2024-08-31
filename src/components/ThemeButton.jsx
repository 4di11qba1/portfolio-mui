import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useTheme } from "../constants/Theme";
import ThemeColorDiv from "./ThemeColorDiv";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ThemeButton() {
  const { light, setLight, setAccentColor, colors } = useTheme();
  const actions = [
    {
      icon: light ? (
        <LightMode onClick={() => changeColorMode()} />
      ) : (
        <DarkMode onClick={() => changeColorMode()} />
      ),
      name: "Color Mode",
      onClick: () => changeColorMode(),
    },
    {
      icon: <ThemeColorDiv color={"teal"} />,
      name: "Teal",
    },
    {
      icon: <ThemeColorDiv color={"blue"} />,
      name: "Blue",
    },
    {
      icon: <ThemeColorDiv color={"green"} />,
      name: "Green",
    },
    {
      icon: <ThemeColorDiv color={"red"} />,
      name: "Red",
    },
    {
      icon: <ThemeColorDiv color={"yellow"} />,
      name: "Yellow",
    },
    {
      icon: <ThemeColorDiv color={"brown"} />,
      name: "Brown",
    },
    {
      icon: <ThemeColorDiv color={"purple"} />,
      name: "Purple",
    },
    {
      icon: <ThemeColorDiv color={"pink"} />,
      name: "Pink",
    },
    {
      icon: <ThemeColorDiv color={"#3CB371"} />,
      name: "Mid Green",
    },
    {
      icon: <ThemeColorDiv color={"pink"} />,
      name: "Pink",
    },
  ];

  const setColor = (color) => {
    localStorage.setItem("accentColor", color);
    setAccentColor(color);
  };
  const changeColorMode = () => {
    localStorage.setItem("light", !light);
    setLight(!light);
  };
  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: "30px",
        left: "30px",
        zIndex: 999999,
      }}
    >
      <SpeedDial
        ariaLabel="theme-button"
        icon={<SpeedDialIcon />}
        sx={{
          "& .MuiSpeedDial-fab": {
            width: "50px",
            height: "50px",
            backgroundColor: colors?.primary,
            color: colors?.onSecondary,
          },
          "& .MuiSpeedDial-fab:hover": {
            backgroundColor: "rgba(135, 135, 135, 0.317) !important",
          },
          zIndex: 999999,
        }}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={
              () => (action.onClick ? action.onClick() : setColor(index - 1)) // Use the specific onClick handler or setColor
            }
            sx={{
              backgroundColor: colors?.primary,
              color: colors?.onSecondary,
              zIndex: 999999,
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
