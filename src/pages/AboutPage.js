import Navbar from "../components/Navbar"
import breifcase from '../assets/briefcase.png'
import arrow from '../assets/graphs arrow.png'
import style from './styles/aboutpage.module.scss'
import Footer from "../components/Footer"
import { Slide } from "react-awesome-reveal";
import mdPhoto from '../assets/JTsirPhoto.jpeg'
import { useEffect } from "react"
// import { TbBulb } from "react-icons/tb";



function AboutPage() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Navbar />
            <main>
                <section className={style.section1}>

                    <div>
                        <Slide triggerOnce='true' style={{ margin: 'auto' }}>
                            <img src={breifcase} alt='' />
                        </Slide>
                        <Slide triggerOnce='true' style={{ width: '100%', padding: 0 }}>
                            <h1>OUR EXPERIENCE</h1>
                            <p >Backed by 20 years of Rich Industry Expertise in the PLM Domain, we decided to transform the PLM Ecosystem by bringing together exceptional team and aiming for utmost customer satisfaction through our innovative approach. We offer value added services in the following areas:</p>
                        </Slide>
                        <Slide triggerOnce='true'>
                            <ul>
                                <li>PLM Implementation Services</li>
                                <li>Data Migration Services</li>
                                <li>CAD, PLM and ERP Integrations </li>
                                <li>Cloud-based deployments</li>
                                <li>Resolving Critical Business and Technical Challenges in PLM Implementations</li>
                            </ul>
                        </Slide>
                    </div>

                    <div>
                        <Slide triggerOnce='true' direction="right" style={{ margin: 'auto' }}>
                            <img src={arrow} alt='' />
                        </Slide>
                        <Slide style={{ width: '100%' }} direction="right" triggerOnce='true' >
                            <h1>OUR APPROACH</h1>
                            <p>Our services include a comprehensive consulting to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, cost analysis, and a schedule. We also recommend a suite of quality products that will help you shorten the time to market your products and achieve accelerated business growth</p>
                        </Slide>
                    </div>
                </section>

                <section className={style.section2}>
                    <div className={style.mdIntro}>
                        {/* <p>JITENDRA KUMAR TILAK<br />
                        <span> FOUNDER & MD</span></p> */}
                        <img src={mdPhoto} alt='MD' />

                        {/* <p className={style.bgBlue}>He is a wonderful Mentor, Leader and a
                            great driving force of our Organization!!
                        </p> */}

                    </div>
                    <div>
                        <ul>
                            <li><span>A seasoned Product Lifecycle Management Professional (PLM) with 20 years of rich and professional IT experience</span>, a dynamic, charismatic, customer focused leader having <span>over 32 months</span> of <span>International (Taiwan and USA)</span> experience, involved in Project Execution & Management for Teamcenter PDM/PLM customizations and implementations for National & International Clients for Automotive, Aerospace and High-Tech Industries
                            </li>
                            <li>
                                <span>Program Manager with Siemens Industry Software India (P) Ltd, Gurgaon</span>, from 2008 to 2021, Part of the SISW India Professional Services team, responsible for the management and successful delivery of large implementation projects within the established timeframe from project initiation through delivery on schedule and within budget. He built and led a strong team of 100+ Consultants including Project Managers, Solution Architects, Developers, QA and Production Support Engineers for a Global PLM Transformation Program at Honeywell from July 2019 to Feb 2021 working with various project stakeholders across US, Europe, China and India.
                            </li>
                            <li>
                                He has done BE in Instrumentation and Controls from the prestigious Netaji Subhas Institute of Technology( NSIT),Delhi in the year 2001. He is also a Certified PMP Professional (PMI).
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage