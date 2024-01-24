import React from 'react'
import Navbar from '../components/Navbar.js'
import Card from '../components/Card.js'
import './pages.css'

function About() {
    return(
    <>
        <Navbar/>
        <div className="card-wrapper">
        <Card name="Kyle Kendall" role="Bassist"/>
        <Card name="Kyle Kendall" role="Bassist"/>
        <Card name="Kyle Kendall" role="Bassist"/>
        </div>
    </>
    );
}

export default About