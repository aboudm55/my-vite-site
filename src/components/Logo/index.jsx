import React from 'react'
import { PiBuildingsFill } from 'react-icons/pi'
import "./Logo.css"
import { logo } from '../../assets'

const Logo = () => {
  return (
    <div className='logo'>
      {/* <div className="icon__container">
        <PiBuildingsFill/>
      </div>
      <h1 className="name">Ben<span>vix</span></h1> */}
        
  
       
<img src={logo} alt="logoFriomer" className="logo__img" />



    </div>
  )
}

export default Logo
