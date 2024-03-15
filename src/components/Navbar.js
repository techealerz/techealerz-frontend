import style from './styles/navbar.module.scss'
import logo from '../assets/TecHealerzLogo.jpeg'
import { RxHamburgerMenu } from "react-icons/rx";
import { SlClose } from "react-icons/sl";
import { useState } from 'react';
import { Link } from 'react-router-dom';


//  Under this section we can keep--- Gallery, Company Events, News & Announcements.
// Under Quick Links we can keep---- Blogs, You Tube videos, Training videos, You Tube Channel

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <header>
            <Link to='/'><img src={logo} alt='techealerzSolutions-logo'></img></Link>
            <ul className={navbarOpen ? style.show : style.hide}>
                <li ><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/carrers'>Careers</Link></li>
                {/* <li><Link to='/life@techealerz'>Life @ TecHealerz</Link></li> */}
                <li>Other Links
                    <ul>
                        <li><Link to='/trainingpage'>Training academy</Link></li>
                        <li><Link to='/elearning'>E-Learning</Link></li>
                        <li><Link to='/clientfeedback'>Client Feedback</Link></li>
                        <li><Link to='/life@techealerz'>Life @ TecHealerz</Link></li>
                        {/* <li>Life @ TecHealerz</li> */}
                    </ul>
                </li>
            </ul>
            {navbarOpen ? <SlClose onClick={() => setNavbarOpen(!navbarOpen)} className={style.hamburger} /> : <RxHamburgerMenu onClick={() => setNavbarOpen(!navbarOpen)} className={style.hamburger} />}

        </header>
    )
}

export default Navbar