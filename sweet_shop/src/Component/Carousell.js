import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from './styles/Carousell.module.css'
import { useNavigate } from "react-router-dom";

function Carousell() {
  const nav = useNavigate()
  const arr = {
    img1: "https://mirchi.com/os/cdn/content/images/Sweets_mobile_273039.jpg",
    img2: "https://assets.limetray.com/assets/image_manager/uploads/7196/Banner-1-sweets-23.jpg",
    img3: "https://foodypoint.in/wp-content/uploads/2018/01/Sweets-Banner.jpg",
  };
  return (
    <Carousel autoPlay={true} showThumbs={false} showIndicators={false} infiniteLoop={true}>
      <div className={classes.cardiv1}>
        <img src={arr.img1} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow1} onClick={()=>nav('/sweetmania')}>Order Now</button>
      </div>
      <div className={classes.cardiv2}>
        <img src={arr.img2} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow2} onClick={()=>nav('/sweetmania')}>Order Now</button>
      </div>
      <div className={classes.cardiv3}>
        <img src={arr.img3} alt="" style={{ height: "65vh" }} />
        <button className={classes.crdnow3} onClick={()=>nav('/sweetmania')}>Order Now</button>
      </div>
      
    </Carousel>
  );
}

export default Carousell;
