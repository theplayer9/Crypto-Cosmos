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
import { CryptoState } from "../CryptoContext";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  header:{
    backgroundColor:"#000000"
  }
}));


const Header = () => {
  const classes = useStyle();
  const history = useHistory();
  const {currency,setCurrency} = CryptoState()
  console.log(currency)
  const darkTheme = createTheme(() => ({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  }));

 

  return (
    <ThemeProvider theme={darkTheme}>
      <Appbar position="static" color="transparent" className={classes.header}>
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
              }} onChange={(e)=>setCurrency(e.target.value)} value={currency}
              
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
