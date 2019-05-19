import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {
  blueGrey,
  red,
  green,
  blue,
  deepOrange,
  grey,
  lightBlue,
  cyan
} from "@material-ui/core/colors";

/**
 * theme: 'light' or 'dark'
 */
const getTheme = theme =>
  createMuiTheme({
    palette: {
      type: theme
    },
    typography: {
      fontSize: 12,
      title: {
        color: theme === "dark" ? cyan[50] : blue[800]
      }
    },
    // Custom Theme Variables
    background: {
      appBars: theme === "dark" ? blueGrey[700] : lightBlue[200],
      appContent: theme === "dark" ? blueGrey[900] : grey[50]
    },
    status: {
      success: green[300],
      pending: blue[400],
      warning: deepOrange[500],
      error: red[500]
    }
  });

export default getTheme;
