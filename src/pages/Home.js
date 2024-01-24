import React from 'react'
import Navbar from '../components/Navbar.js'
import ImageCarousel from '../components/Carousel.js'
import './pages.css'
import ImageOne from '../images/logo.jpg'
import ImageTwo from '../images/pic1.jpg'
import ImageThree from '../images/pic2.jpg'
import ImageFour from '../images/pic3.jpg'
import UpdateCard from '../components/UpdateCard.js'

export default function Home() {
return(
<div>
    <Navbar/>
    <div className="center">
        <ImageCarousel img1={ImageOne} img2={ImageTwo} img3={ImageThree} img4={ImageFour}/>
    </div>
    <div className="home-wrapper">
        <h1>almost... what?</h1>
        <p className="about">We're almost old, almost good, and <i>almost</i> a band, but one thing that is certain is our love of rock n' roll. We are a cover band from Bend, Oregon playing your favorite songs from the 60s-90s and beyond!</p>
    </div>
    <div className="center">
    <UpdateCard/>
    </div>
</div>
);
}