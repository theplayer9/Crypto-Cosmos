import {
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { CoinList } from "../config/Api";
import { CryptoState } from "../CryptoContext";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

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
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
        />
      </Container>
    </ThemeProvider>
  );
};

export default CoinsTable;
