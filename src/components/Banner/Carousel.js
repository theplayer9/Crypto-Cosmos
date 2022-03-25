import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/Api";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    // color:"red"
  },
  carousleItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

const Carousel = () => {
  const classes = useStyle();
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async (cry) => {
    const { data } = await axios.get(TrendingCoins(cry));
    setTrending(data);
    console.log("Trending coins data :", data);
  };
  useEffect(() => {
    fetchTrendingCoins(currency);
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    500: {
      items: 4,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link className={classes.carousleItem} to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span>
            {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol}
          {coin?.current_price}
          {/* {numberWithCommas(coin?.current_price.toFixed(2)) */}
        </span>
      </Link>
    );
  });

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
