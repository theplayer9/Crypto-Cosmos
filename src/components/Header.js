import React from "react";
import Appbar from "@material-ui/core/AppBar";
import {
  Container,
  MenuItem,
  Toolbar,
  Typography,
  Select,
  makeStyles,
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

  return (
    <Appbar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => history.push("/")}
            className={classes.title}
          >
            Crypto Cosmos{" "}
          </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 10,
              backgroundColor: "white",
            }}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </Appbar>
  );
};

export default Header;
