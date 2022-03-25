import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/Api";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const useStyle = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
    // color:"red"
  },
}));

const Carousel = () => {
  const classes = useStyle();
  const [trending, setTrending] = useState([]);
  const { currency } = CryptoState();

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
      items: 1,
    },
    500: {
      items: 3,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive
      />
    </div>
  );
};

export default Carousel;
