const lightColors = [
  {
    // Blue
    primary: "#36618E",
    primaryFixed: "#36618E",
    onPrimaryContainer: "#021E36",
    primaryContainer: "#A0CAFD",
    secondary: "#535F70",
    secondaryFixed: "#535F70",
    secondaryContainer: "#D7E3F7",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#ECEEF4",
  },
  {
    // Green
    primary: "#3E6836",
    primaryFixed: "#3E6836",
    onPrimaryContainer: "#012101",
    primaryContainer: "#C0EFB0",
    secondary: "#54634D",
    secondaryFixed: "#54634D",
    secondaryContainer: "#D7E8CD",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#ECEFE5",
  },
];

const darkColors = [
  {
    // Blue
    primary: "#A0CAFD",
    primaryFixed: "#A0CAFD",
    onPrimaryContainer: "#CEE2FC",
    primaryContainer: "#194975",
    secondary: "#BBC7DB",
    secondaryFixed: "#BBC7DB",
    secondaryContainer: "#3B4858",
    onSecondary: "#253240",
    surfaceContainer: "#1D2024",
  },
  {
    // Green
    primary: "#A5D396",
    primaryFixed: "#A5D396",
    onPrimaryContainer: "#C0EFB0",
    primaryContainer: "#285020",
    secondary: "#BBCBB2",
    secondaryFixed: "#BBCBB2",
    secondaryContainer: "#3C4B37",
    onSecondary: "#263422",
    surfaceContainer: "#1D211B",
  },
];

export const getColors = (light, accentColor) =>
  light ? lightColors[accentColor] : darkColors[accentColor];
