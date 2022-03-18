import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import React from "react";
import { Typography } from "@material-ui/core";
const useStyle = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./img2.jpg)",
    // opacity: 0.5,
    //   borderRadius:50
    //   backgroundRepeat: "repeat-y"
  },
  bannerContent: {
    height: 450,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  subtitle:{
      color:"darkgrey",
      textTransform:"capitalize",
      fontFamily:"Montserrat",
      textAlign:"center"
  }
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.banner}>
        <Container className={classes.bannerContent}></Container>
      </div>
      <Typography variant="h2" className={classes.title}>
        Crypto Cosmos
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
            Be on top of all your favorite Crypto
          </Typography>
    </>
  );
};

export default Banner;
