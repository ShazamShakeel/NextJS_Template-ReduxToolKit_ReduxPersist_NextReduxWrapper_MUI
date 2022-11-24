import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFDE59",
    },
    secondary: {
      main: "#F5F5FB",
    },
    background: {
      default: "#E6E6E6",
    },
  },
  typography: {
    fontSize: 16,
  },
});

export default theme;
