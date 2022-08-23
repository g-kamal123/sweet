import React from 'react'
import Carousell from './Carousell'
import CustomerSay from './CustomerSay'
import ItemNavs from './ItemNavs'
import Specials from './Specials'

function LandingPage() {
  return (
    <div>
        <ItemNavs />
        <Carousell />
        <Specials />
        <CustomerSay />
    </div>
  )
}

export default LandingPage