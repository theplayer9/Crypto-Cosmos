import React from "react";
import Appbar from "@material-ui/core/AppBar";
import {
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));


const Header = () => {
  const classes = useStyle();
  const history = useHistory();
  const darkTheme = createTheme(() => ({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  }));

  //In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

  return (
    <ThemeProvider theme={darkTheme}>
      <Appbar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title} variant="h4"
            >
              Crypto Cosmos{" "}
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 10,
                backgroundColor: "white",
              }}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </Appbar>
    </ThemeProvider>
  );
};

export default Header;
