import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/Api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import Coininfo from "../components/Coininfo";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sidebar: {
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 25,
    borderRight: "2px solid grey",
  },
}));

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  const classes = useStyle();

  const fetchCoin = async (naughty) => {
    const { data } = await axios.get(SingleCoin(naughty));
    setCoin(data);
  };
  console.log("coin data:", coin);

  useEffect(() => {
    fetchCoin(id);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>fsafdsd{/* this is the sidebar  */}</div>
      {/* this is the chart */}
      <Coininfo coin={coin}></Coininfo>
    </div>
  );
};

export default CoinPage;
