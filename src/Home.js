import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-Events/PD23/GW/PC_Hero_EN_V7_2X._CB602920566_.jpg"/>

            <div className='home_row'>
                <Product
                    id='271'
                    title="The Wisdom of Psychopaths by Kevin Dutton"
                    price={10.99}
                    image="https://m.media-amazon.com/images/I/71A2+AZ8f8L._AC_UF1000,1000_QL80_.jpg" 
                    rating={5}/>
                <Product
                    id='332'
                    title="Desidiya
                    3D 7 Color Changing Moon Night Rechargeable Led Lamp With Stand Night Lamp For Bedroom Lights For Adults And Kids Home Room Beautiful Indoor Lighting - 15Cm, Prong Base, Pack of 13D 7 Color Changing Moon Night Rechargeable Led Lamp With Stand Night Lamp For Bedroom Lights "
                    price={8.99}
                    image="https://m.media-amazon.com/images/I/71umUYyjXrL._SL1500_.jpg" 
                    rating={3}/>
                
            </div>

            <div className='home_row'>
            <Product
                    id='543'
                    title="Dot & Key Lip Plumping Mask with Shea Butter & Vitamin C + E for Naturally Glowing Lips "
                    price={2.54}
                    image="https://m.media-amazon.com/images/I/51kfbv8mGiL._SL1500_.jpg" 
                    rating={4}/>
                <Product
                    id='423'
                    title="HUION Drawing Monitor KAMVAS Pro 13 Pen Display Graphic Tablet Tilt Battery-Free Stylus 8192 Pen Pressure 120% sRGB 13.3 inch GT-133 13.3 inch Monitor with Stand for Linux, Windows and Mac"
                    price={240}
                    image="https://m.media-amazon.com/images/I/71+sEBsIKvS._SL1500_.jpg" 
                    rating={5}/>
               <Product
                    id='280'
                    title="SweatyRocks Women's Color Block Drawstring Front Short Sleeve Crop Top T-Shirt"
                    price={24.99}
                    image="https://m.media-amazon.com/images/I/71DwlXBB4bL._UL1500_.jpg" 
                    rating={4}/>
            </div>

            <div className='home_row'>
            <Product
                    id='943'
                    title="OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black)"
                    price={450}
                    image="https://m.media-amazon.com/images/S/aplus-media/vc/544e4d62-f254-4b16-9943-eabe6a181ece.__CR0,0,970,600_PT0_SX970_V1___.jpg" 
                    rating={4}/>
            </div>

        </div>
    </div>
  )
}

export default Home