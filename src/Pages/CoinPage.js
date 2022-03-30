import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/Api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";
import {
  LinearProgress,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Coininfo from "../components/Coininfo";
import { numberWithCommas } from "../components/Banner/Carousel";

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
    marginTop: 80,
    borderRight: "2px solid grey",
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Monsterrat",
  },
  description: {
    width: "100%",
    fontFamily: "Monsterrat",
    padding: 25,
    paddingBottom: 15,
    paddingTop: 0,
    textAlign: "justify",
  },
  marketData: {
    alignSelf: "start",
    width: "100%",
    padding: 25,
    paddingTop: 10,

    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },

    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
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

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  // On line 101 i have usesd numberWithCommas function. Here coins is not populated yet. So above the return statement I have passes an If statement , so that if the coin is not populated yet , it will show a LinearProcessor

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        {/* this is the sidebar  */}
        <img
          src={coin?.image?.large}
          alt={coin?.name}
          height="200"
          style={{ margineBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          <div
            dangerouslySetInnerHTML={{
              __html: coin?.description?.en.split(". ")[0],
            }}
          ></div>
          {/* {coin?.description.en.split( " .")[0]} */}
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography className={classes.heading} variant="h5">
              Rank :
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fonstFamily: "Monsterrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography className={classes.heading} variant="h5">
              Current Price :
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fonstFamily: "Monsterrat" }}>
              {symbol}
              {numberWithCommas(
                coin?.market_data?.current_price[currency.toLowerCase()]
              )}
              {/* -------------doubt----------- */}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography className={classes.heading} variant="h5">
              Market Cap :
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fonstFamily: "Monsterrat" }}>
              {symbol}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
            </Typography>
          </span>
        </div>
      </div>
      {/* this is the chart */}
      <Coininfo coin={coin}></Coininfo>
    </div>
  );
};

export default CoinPage;
