import React, { useContext } from "react";
import { Storage } from "./Storage";
import classes from "./styles/Sweetmainia.module.css";

function Sweetmainia() {
    const detail = useContext(Storage)
  return (
    <div className={classes.sweetmania}>
      <div className={classes.filters}>
        <h2>filters</h2>
        <ul>
          <li>
            <input type="checkbox" />
            <span>BreakFast</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Birthday</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Sweets</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Kulfi</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Cake</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Salted</span>
          </li>
        </ul>
        <h2>Price</h2>
        {/* <span></span> */}
        <br />
        <select>
            <option>Min</option>
          <option>0</option>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
          <option>500</option>
          <option>600</option>
          <option>700</option>
          <option>800</option>
          <option>900</option>
        </select>
        <select>
          <option>Max</option>
          <option>100</option>
          <option>200</option>
          <option>300</option>
          <option>400</option>
          <option>500</option>
          <option>600</option>
          <option>700</option>
          <option>800</option>
          <option>900</option>
          <option>1000</option>
        </select>
      </div>
      <div className={classes.allproducts}>
      {detail.alldata && detail.alldata.map((item)=>
      <div className={classes.prod}>
      <img src={item.image} alt=''/>
      <p>
      <span>{item.name}</span>
        <span>&#8377;{item.price}</span>
      </p>
        <button>Add to Cart</button>
      </div>)}
      
      </div>
    </div>
  );
}

export default Sweetmainia;
