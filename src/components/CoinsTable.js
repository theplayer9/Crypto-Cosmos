import axios from "axios";
import React from "react";
import { useState } from "react";
import { CoinList } from "../config/Api";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList());
    setCoins(data);
    setLoading(false);
  };

  return <div>CoinsTable</div>;
};

export default CoinsTable;
