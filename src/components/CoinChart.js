import React from "react";
import Chart from "react-apexcharts";
import { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { HistoricalChart } from "../config/Api";
import axios from "axios";
import { useEffect } from "react";
import { CryptoState } from "../CryptoContext";

const useStyle = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 100,
  },
}));

const CoinChart = ({ coin }) => {
  const classes = useStyle();
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [option, setOption] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    title: {
      text: "Stock Price Movement",
      align: "left",
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: "Price",
      },
    },
    xaxis: {
      type: "datetime",
    },
  });
  const [series, setSeries] = useState([
    { name: "series-1", data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
  ]);

  //   const fetchHistoricalData = async () => {
  //     const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
  //     console.log("thadsh", data);
  //     setHistoricData(data.prices);
  //     console.log("historic data in :", historicData);
  //   };
  //   console.log("historic data out :", historicData);

  useEffect(() => {
    // fetchHistoricalData();
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=${currency}&days=${days}`
      )
      .then((response) => {
        console.log("this is responseasdfdf", response);
        response.data.data.prices.map((item) => {
          console.log("this is response item:", item);
        });
      });
  }, [currency]);

  return (
    <div className={classes.container}>
      <Box
        width={700}
        height={500}
        xs={{ width: "30%" }}
        sm={{ width: "30%" }}
        md={{ width: "auto" }}
      >
        <Chart
          options={option}
          series={series}
          type="line"
          width={"80%"}
          height={"100%"}
        />
      </Box>
    </div>
  );
};

export default CoinChart;
