import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/Homepage";
import useStyle from "./style";
import Alert from "./components/Alert";
// useStyle is a hook provided by makeStyle from material-Ui

const App = () => {
  const classes = useStyle(); // here we are calling that hook

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.App}>
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
      <Alert />
    </BrowserRouter>
  );
};

export default App;
