import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from './styles/Carousell.module.css'

function Carousell() {
  const arr = {
    img1: "https://lh3.googleusercontent.com/p/AF1QipP_p8fBMs-lECKpWJTNVB8VFx8rfe0WcTdwqmFE=w1080-h608-p-no-v0",
    img2: "https://thumbs.dreamstime.com/b/confectionary-shop-display-background-sweet-treats-variety-sma-small-business-concept-horizontal-banner-format-warm-white-balance-91148679.jpg",
    img3: "https://english.onlinekhabar.com/wp-content/uploads/2022/01/DSC_2664-1024x681.jpg",
  };
  return (
    <Carousel autoPlay={true} showThumbs={false} showIndicators={false} infiniteLoop={true}>
      <div className={classes.cardiv1}>
        <img src={arr.img1} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow1}>Order Now</button>
      </div>
      <div className={classes.cardiv2}>
        <img src={arr.img2} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow2}>Order Now</button>
      </div>
      <div className={classes.cardiv3}>
        <img src={arr.img3} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow3}>Order Now</button>
      </div>
      
    </Carousel>
  );
}

export default Carousell;
