import style from './styles/footer.module.scss'
import logo from '../assets/TecHealerzLogo.jpeg'
import mailImg from '../assets/icons8-mail-96.png'
import phone from '../assets/icons8-whatsapp-96.png'
import linkedIn from '../assets/icons8-linked-in-96.png'
import youtube from '../assets/icons8-youtube-96.png'
import { Link } from 'react-router-dom'
// import twitter from '../assets/icons8-twitter-96.png'
// import facbook from '../assets/icons8-facebook-96.png'
import instagram from '../assets/icons8-instagram-96.png'


// Footer- Our Team, Privacy Policy- Terms & Conditions, Newsletter- with Subscribe option
// Designed & Created by Gurpreet Singh.

function Footer() {
    return (
        <footer className={style.footerWindow}>
            <div className={style.footerContent}>
                <div className={style.text}>
                    <div className={style.footerLogo}>
                        <img src={logo} alt='' />
                    </div>
                    <div className={style.company}>
                        <h1>TecHealerz Solutions Private Limited</h1>
                        <p>C2-1229, C2 Block Palam Vihar, Gurugram, Haryana-122017</p>
                    </div>
                </div>
                <div className={style.contactUsSection}>
                    <p>Contact Us</p>
                    <div className={style.contactUsLinks}>
                        <div className={style.contactUsLink}>
                            <img src={mailImg} alt='' />
                            <a href='mailto:info@techealerz.com' target='_blank' rel='noreferrer'><p>info@techealerz.com</p></a>
                        </div>
                        <div className={style.contactUsLink}>
                            <img src={phone} alt='' />
                            <a href="https://wa.me/919871018713" target='_blank' rel='noreferrer'><p>+91-9871018713</p></a>
                        </div>
                    </div>
                </div>
                <div className={style.socialMediaSection}>
                    <p>Social Media</p>
                    <div className={style.socialMediaLinks}>
                        <div className={style.socialMediaLink}>
                            <a href='https://www.linkedin.com/company/techealerz/mycompany/' target='_blank' rel='noreferrer'><img src={linkedIn} alt='' />
                                <p>LinkedIn</p>
                            </a>
                        </div>
                        <div className={style.socialMediaLink}>
                            <a href='https://www.youtube.com/@TecHealerz' target='_blank' rel='noreferrer'><img src={youtube} alt='' />
                                <p>YouTube</p>
                            </a>
                        </div>
                        {/* <div className={style.socialMediaLink}>
                            <img src={twitter} alt='' />
                        </div>
                        <div className={style.socialMediaLink}>
                            <img src={facbook} alt='' />
                        </div> */}
                        <div className={style.socialMediaLink}>
                            <a href='https://www.instagram.com/tecHealerz' target='_blank' rel='noreferrer'> <img src={instagram} alt='' />
                                <p>Instagram</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <p><Link style={{ textDecoration: 'none', color: 'black' }} to='/ourdigitalinnovationteam' >Our Digital Innovation Team </Link>|<Link style={{ textDecoration: 'none', color: 'black' }} to='/privacypolicy'> Privacy Policy - Terms & Conditions</Link></p>


            <p>Copyright &copy; 2021 TecHealerz solutions Private Limited - All Rights Reserved</p>
        </footer>
    )
}

export default Footer