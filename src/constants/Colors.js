const lightColors = [
  {
    // Teal
    primary: "#006874",
    onPrimaryContainer: "#001F24",
    primaryContainer: "#9EEFFD",
    secondary: "#4A6267",
    secondaryContainer: "#CDE7EC",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#E9EFF0",
  },
  {
    // Blue
    primary: "#36618E",
    onPrimaryContainer: "#021E36",
    primaryContainer: "#A0CAFD",
    secondary: "#535F70",
    secondaryContainer: "#D7E3F7",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#ECEEF4",
  },
  {
    // Green
    primary: "#3E6836",
    onPrimaryContainer: "#012101",
    primaryContainer: "#C0EFB0",
    secondary: "#54634D",
    secondaryContainer: "#D7E8CD",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#ECEFE5",
  },
  {
    // Red
    primary: "#904B40",
    onPrimaryContainer: "#390905",
    primaryContainer: "#FFDAD4",
    secondary: "#775651",
    secondaryContainer: "#FFDAD4",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#FCEAE7",
  },
  {
    // Yellow
    primary: "#616118",
    onPrimaryContainer: "#1D1E00",
    primaryContainer: "#E8E78F",
    secondary: "#606043",
    secondaryContainer: "#E7E4BF",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#F1EEE0",
  },
  {
    // Brown
    primary: "#815513",
    onPrimaryContainer: "#2A1700",
    primaryContainer: "#FFDDB7",
    secondary: "#705B41",
    secondaryContainer: "#FCDEBC",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#F9ECE0",
  },
  {
    // Purple
    primary: "#725188",
    onPrimaryContainer: "#2B0C40",
    primaryContainer: "#F3DAFF",
    secondary: "#675A6E",
    secondaryContainer: "#EFDCF5",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#F4EBF3",
  },
  {
    // Pink
    primary: "#8D4959",
    onPrimaryContainer: "#390717",
    primaryContainer: "#FFD9DF",
    secondary: "#75565C",
    secondaryContainer: "#FFD9DF",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#FBEAEB",
  },
  {
    // Mid Green
    primary: "#206A4E",
    onPrimaryContainer: "#002014",
    primaryContainer: "#A8F2CE",
    secondary: "#4D6357",
    secondaryContainer: "#CFE9D9",
    onSecondary: "#FFFFFF",
    surfaceContainer: "#EAEFE9",
  },
];

const darkColors = [
  {
    // Teal
    primary: "#82D3E0",
    onPrimaryContainer: "#9EEFFD",
    primaryContainer: "#004F58",
    secondary: "#B1CBD0",
    secondaryContainer: "#334B4F",
    onSecondary: "#1C3438",
    surfaceContainer: "#1B2123",
  },
  {
    // Blue
    primary: "#A0CAFD",
    onPrimaryContainer: "#CEE2FC",
    primaryContainer: "#194975",
    secondary: "#BBC7DB",
    secondaryContainer: "#3B4858",
    onSecondary: "#253240",
    surfaceContainer: "#1D2024",
  },
  {
    // Green
    primary: "#A5D396",
    onPrimaryContainer: "#C0EFB0",
    primaryContainer: "#285020",
    secondary: "#BBCBB2",
    secondaryContainer: "#3C4B37",
    onSecondary: "#263422",
    surfaceContainer: "#1D211B",
  },
  {
    // Red
    primary: "#FFB4A8",
    onPrimaryContainer: "#FFDAD4",
    primaryContainer: "#73342A",
    secondary: "#E7BDB6",
    secondaryContainer: "#5D3F3B",
    onSecondary: "#442925",
    surfaceContainer: "#271D1B",
  },
  {
    // Yellow
    primary: "#CBCB76",
    onPrimaryContainer: "#E8E78F",
    primaryContainer: "#494900",
    secondary: "#CAC8A5",
    secondaryContainer: "#49482D",
    onSecondary: "#323218",
    surfaceContainer: "#201F18",
  },
  {
    // Brown
    primary: "#F7BB70",
    onPrimaryContainer: "#FFDDB7",
    primaryContainer: "#653E00",
    secondary: "#DFC2A2",
    secondaryContainer: "#57432B",
    onSecondary: "#3F2D17",
    surfaceContainer: "#251E17",
  },
  {
    // Purple
    primary: "#DFB8F6",
    onPrimaryContainer: "#F3DAFF",
    primaryContainer: "#593A6E",
    secondary: "#D2C1D9",
    secondaryContainer: "#4F4256",
    onSecondary: "#382C3E",
    surfaceContainer: "#231F24",
  },
  {
    // Pink
    primary: "#FFB1C0",
    onPrimaryContainer: "#FFD9DF",
    primaryContainer: "#713342",
    secondary: "#E4BDC3",
    secondaryContainer: "#5C3F44",
    onSecondary: "#43292F",
    surfaceContainer: "#251D20",
  },
  {
    // Mid Green
    primary: "#8DD5B3",
    onPrimaryContainer: "#A8F2CE",
    primaryContainer: "#005138",
    secondary: "#B3CCBE",
    secondaryContainer: "#364B40",
    onSecondary: "#1F3629",
    surfaceContainer: "#1B211D",
  },
];

export const getColors = (light, accentColor) =>
  light ? lightColors[accentColor] : darkColors[accentColor];
