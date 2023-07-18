import React from 'react'
import './SubHeader.css';
import MenuIcon from '@mui/icons-material/Menu';

function SubHeader() {
  return (
    <div className='subHeader'>

        <p className='subHeader_Icon'><MenuIcon/>All</p>

        <div className='subHeader_menu'>
            
            <p>Fashion</p>
            <p>Buy Again</p>
            <p>Free Delivery</p>
            <p>Vouchers</p>
            <p>Gift Cards & Top Up</p>
            <p>Home & Garden</p>
            <p>Recently viewed</p>
        </div>

        <img src='https://m.media-amazon.com/images/G/02/IMDbTV/Marketing/Gateway/SWM/GW_SWM_MULTITITLE_400x39_00000_REGION._CB614590056_.jpg'/>
    </div>
    
  )
}

export default SubHeader