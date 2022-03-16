import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from  "./Pages/HomePage";
import useStyle from './style';
// useStyle is a hook provided by makeStyle from material-Ui




const App = () => {
    const classes = useStyle()  // here we are calling that hook


  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header  />
        <Route path="/" component={HomePage}   />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
