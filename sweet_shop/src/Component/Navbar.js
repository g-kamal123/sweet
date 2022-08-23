import React, { useContext, useState } from 'react'
import { Storage } from './Storage'
import classes from './styles/Navbar.module.css'

function Navbar() {
    const [animation,setanimation] = useState(false)
    const detail = useContext(Storage)
  return (
    <>
    <div className={animation? classes.act:classes.inact}>
    <nav className={classes.navbar}>
        <a><img src='https://m.media-amazon.com/images/S/abs-image-upload-na/1/AmazonStores/A21TJRUUN4KGV/d737e71d0c19943f08d74ec1be93923e.w3600.h1080.png' alt=''/></a>
        <div className={classes.srch}>
          {detail.show && <div className={`${classes.srchicon} ${animation? classes.act:classes.inact}`} onClick={()=>{setanimation(true)
          document.getElementById('focus').focus()}} >
        <i class="fa fa-search" aria-hidden="true" ></i>
        <input />
        </div>}
        <ul>
            <li onClick={()=>detail.showsearch()}>Sweetmania</li>
            <li>Catering</li>
            <li>Cart</li>
            <li>Contact Us</li>
        </ul>
        <button>Login</button>
        </div>
    </nav>
    </div>
    <div className={animation? classes.active : classes.notactive}>
    <input id='focus'/>
    <span onClick={()=>setanimation(false)}>&times;</span>
    </div>
    </>
  )
}

export default Navbar