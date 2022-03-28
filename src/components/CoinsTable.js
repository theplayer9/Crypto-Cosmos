import {
  Container,
  createTheme,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Classnames } from "react-alice-carousel";
import { CoinList } from "../config/Api";
import { CryptoState } from "../CryptoContext";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(() => ({
  searchbar: {
    // border: "1px solid grey",
    backgroundColor: "white",
    // borderRadius: "50"
  },
}));

const CoinsTable = () => {
  const classes = useStyle();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async (cry) => {
    setLoading(true);
    const { data } = await axios.get(CoinList(cry));
    setCoins(data);
    setLoading(false);
  };

  console.log("coinstable data:", coins);
  useEffect(() => {
    fetchCoins(currency);
  }, [currency]);

  const darkTheme = createTheme(() => ({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  }));

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  //   console.log(handleSearch)
  //   console.log(coins)

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Crypto currency Prices by Market Cap
        </Typography>
        <TextField
          className={classes.searchbar}
          label="Search For a Crypto Currency..."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24hr Change", "Market Cap"].map(
                    (eren) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                        }}
                        key={eren}
                        align={eren == "Coin" ? "" : "right"}
                      >
                        {eren}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>{handleSearch().map()}</TableBody>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
