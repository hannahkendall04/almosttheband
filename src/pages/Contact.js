import Navbar from '../components/Navbar.js'
import './pages.css'

function Contact () {
    return (
    <div>
        <Navbar/>   
        <div className="about">
        <h1>Contact</h1>
        <p>For bookings, please call or text Terry 503-929-1417 or Ross 541-350-8161.</p>
        <p>Check us out on <a href="https://m.facebook.com/profile.php?id=100092164110754&locale2=hi_IN&_rdr">Facebook </a>
         and <a href="https://www.instagram.com/almosttheband/">Instagram</a>!</p>
        </div>
    </div>       
    );
}

export default Contact