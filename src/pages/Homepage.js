import Navbar from "../components/Navbar"
// import homepageImg1 from '../assets/7402029_3655384.svg'
import homepageImg2 from '../assets/Introduction.jpg'
import homepageImg3 from '../assets/industry challenges.png'
import homepageImg4 from '../assets/homepage.png'
import style from './styles/homepage.module.scss'
import Footer from "../components/Footer"
import { Fade, Slide } from "react-awesome-reveal"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import lt from '../assets/L&T.jpeg'
import ntt from '../assets/NTT data.png'
import siemens from '../assets/siemens.jpeg'
import mothersonLogo from '../assets/motherson-logo.png'
import designerPhoto from '../assets/Designer.png'
import { useEffect } from "react"
// import bgVideo from '../assets/bgVideo.mp4'

function Homepage() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className={style.homepageWindow}>
            <Navbar />
            <main>
                {/* <section className={style.topSection}>
                    <Slide triggerOnce='true' style={{ width: '100%', position: 'absolute', top: '30%',left:'5%' }}>
                        <div className={style.glass}>
                         
                                <h1>EXPERIENCE BEST-IN-CLASS <span>PLM CONSULTING SERVICES</span> AT <span>TECHEALERZ!!</span></h1>
                          
                        </div>
                    </Slide>
                </section> */}
                <section className={style.section1}>
                    {/* <video width={'100%'} src={bgVideo} autoPlay /> */}

                    <div className={style.homepageText}>
                        <Slide triggerOnce='true' style={{ width: '100%' }}>
                            <h1>EXPERIENCE BEST-IN-CLASS <span>PLM CONSULTING SERVICES</span> AT <span>TECHEALERZ!!</span></h1>
                        </Slide>
                        <Slide triggerOnce='true' style={{ width: '100%' }}>
                            <p>Let us deploy personalized PLM Solutions for accelerated Business Growth by integrating processes and Technologies</p>
                        </Slide>
                        <button><Link to='/contact'>contact us</Link></button>



                    </div>

                    <div>
                        <Slide style={{ width: '100%' }} direction="right" triggerOnce="true" >
                            <img src={homepageImg4} alt='' />
                        </Slide>
                    </div>
                </section>
                <div className={style.carasoul}>
                    <p>Our Trusted Clients</p>
                    <div className={style.testimonail}>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={1}
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                        >
                            <SwiperSlide><div className={style.images}><img src={lt} alt='' /></div></SwiperSlide>
                            <SwiperSlide><div className={style.images}><img src={ntt} alt='' /></div></SwiperSlide>
                            <SwiperSlide><div className={style.images}><img src={siemens} alt='' /></div></SwiperSlide>
                            <SwiperSlide><div className={style.images}><img src={mothersonLogo} alt='' /></div></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                {/* section 2 */}
                <section className={style.section2}>
                    <div>
                        <Slide triggerOnce='true' style={{ width: '100%' }}>
                            <img src={homepageImg2} alt='' />
                        </Slide>
                    </div>
                    <div className={style.homepage2Text}>
                        <Slide triggerOnce='true' direction="right" style={{ width: '100%' }}>
                            <h1>
                                <span>TECHEALERZ</span> FIRMLY BELIEVES <span>IMPLEMENTATION</span> OF THE <span>RIGHT TECHNOLOGY</span> CAN BRING A <span>POSITIVE CHANGE</span> TO YOUR ORGANIZATION !!
                            </h1>
                            <p>
                                We have a team of highly experienced and passionate professionals with customer-oriented approach for streamlining processes and building efficient PLM Systems to deliver remarkable results. Our knowledgeable team can quickly identify the challenges faced in PLM Implementations and provide correct and logical resolutions for ultimate project success and value creation.
                            </p>
                        </Slide>
                    </div>
                </section>
                <section className={style.section3}>

                    <div className={style.homepage3text}>
                        <Slide triggerOnce='true' style={{ width: '100%', justifyContent: 'flex-start' }}>
                            <h1>INDUSTRY CHALLENGES</h1>
                        </Slide>
                        <Slide triggerOnce='true'>
                            <ul>
                                <li>Do you believe the adoption of PLM and related Technologies is critical for your Core Business Data and Processes?</li>
                                <li>Do you believe it's important to seamlessly connect PLM applications with enterprise applications like ERP, CRM, and more?</li>
                                <li>Is your organization not happy with the current PLM tool and you don't know how you can make a difference?</li>
                                <li>Are your PLM projects stuck and you are frustrated because of higher costs and long project timelines?</li>
                            </ul>
                        </Slide>
                    </div>

                    <div>
                        <Slide triggerOnce='true' style={{ width: '100%' }} direction="right" >
                            <img src={homepageImg3} alt='' />
                        </Slide>
                    </div>
                </section>
            </main >
            <Footer />
        </div >
    )
}

export default Homepage