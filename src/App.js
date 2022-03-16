import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/Homepage";



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={HomePage} />
        <Route path="/" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
