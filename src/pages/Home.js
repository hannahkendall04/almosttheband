import React from 'react'
import Navbar from '../components/Navbar.js'
import ImageCarousel from '../components/Carousel.js'
import './pages.css'
import ImageOne from '../images/logo.jpg'
import ImageTwo from '../images/pic1.jpg'
import ImageThree from '../images/pic2.jpg'
import ImageFour from '../images/pic3.jpg'

export default function Home() {
return(
<div>
    <Navbar/>
    <ImageCarousel img1={ImageOne} img2={ImageTwo} img3={ImageThree} img4={ImageFour}/>
    <div className="home-wrapper">
        <h2>Almost... what?</h2>
    </div>

</div>
);
}