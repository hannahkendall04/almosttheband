import React from 'react'
import Navbar from '../components/Navbar.js'
import Card from '../components/Card.js'
import './pages.css'
import band from '../images/band.jpg'
import kyle from '../images/kyle.jpg'
import dave from '../images/dave.jpg'
import ross from '../images/ross.jpg'
import terry from '../images/terry.jpg'
import john from '../images/john.jpg'


function About() {
    return(
    <div>
        <Navbar/>
        <div className="imageBox">
        <img src={band} alt="Band members" />
        </div>
        <div className="about">
        <p>almost’s unique interpretation of rock music is the foundation of 
            this five piece band from Bend, Oregon. We play high energy music 
            from all decades of rock, including the 70s, 80s, 90s and 2000s. 
            Although we stray from pop, our music is easily recognizable and danceable. 
            With a tight rhythm section (Ross Chambers, drums and Kyle Kendall, bass), 2 guitarists 
            (John Sorlie and Terry Belunes), and multi-instrumentalist/lead singer 
            (Dave LiaBraaten), the band has been known to get people rock’n. Our goal is to create 
            a fun and enjoyable experience for people of all ages. 
        </p>
            <p>Check out our <a href="https://www.facebook.com/people/Almost-the-band/100092164110754/" >Facebook page</a> for more info. </p>
        </div>
        <div className="card-wrapper">
        <Card image={terry} name="Terry Belunes" role="Guitar"/>
        <Card image={ross} name="Ross Chambers" role="Drums"/>
        <Card image={kyle} name="Kyle Kendall" role="Bass"/>
        <Card image={dave} name="Dave LiaBraten" role="Lead Singer"/>
        <Card image={john} name="John Sorlie" role="Guitar"/>
        </div>
    </div>
    );
}

export default About