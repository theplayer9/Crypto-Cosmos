import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/Api";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {});

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
  }, [id]);

  return <div>CoinPage</div>;
};

export default CoinPage;
