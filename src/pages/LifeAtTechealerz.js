import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import style from './styles/lifeatTechealerz.module.scss'
import rangmanch1 from '../assets/rangmanch1.jpg'
import rangmanch2 from '../assets/rangmanch2.jpg'
import rangmanch3 from '../assets/rangmanch3.jpg'
import rangmanch4 from '../assets/rangmanch4.jpg'
import rangmanch5 from '../assets/rangmanch5.jpg'
import books from '../assets/books.jpeg'
import selfie1 from '../assets/selfie 1.JPG'
import selfie2 from '../assets/selfie 2.jpeg'
import selfie3 from '../assets/selfie 3.jpeg'
import selfie4 from '../assets/selfie 4.jpg'
import selfie5 from '../assets/selfie 5.jpg'
import selfie6 from '../assets/selfie 6.jpg'
import selfie7 from '../assets/selfie 7.jpg'
import selfie8 from '../assets/selfie 8.jpg'
import selfie9 from '../assets/selfie 9.jpg'
import selfie10 from '../assets/selfie 10.jpeg'
import selfie11 from '../assets/selfie 11.jpg'
import selfie12 from '../assets/selfie 12.jpeg'
import selfie13 from '../assets/selfie 13.jpg'
import selfie14 from '../assets/selfie14.jpg'
import selfie15 from '../assets/selfie15.jpg'
import selfie16 from '../assets/selfie16.jpg'
import selfie17 from '../assets/selfie17.jpg'
import selfie18 from '../assets/selfie18.jpg'
import selfie19 from '../assets/selfie19.jpeg'
import selfie20 from '../assets/selfie20.jpeg'
import rangmanch6 from '../assets/rangmanch6.jpeg';
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react"
import { IoMdCloseCircle } from "react-icons/io";
import rangmanchVideo1 from '../assets/rangmanch1.mp4'
import rangmanchVideo2 from '../assets/rangmanch2.mp4'
import rangmanchVideo3 from '../assets/rangmanch3.mp4'
import rangmanchVideo4 from '../assets/rangmanch4.mp4'


function LifeAtTechealerz() {
    const [openModal, setOpenModal] = useState(false)
    const [imagePreview, setImagePreview] = useState()
    const [showBooks, setShowBooks] = useState(false)
    const [showRangmanch, setShowRangmanch] = useState(false)


    function handleClick(img) {
        setImagePreview(img)
        setOpenModal(true)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <div className={style.mainWindow}>
            <Navbar />
            <main className={style.mainSection}>
                {
                    openModal && <div className={style.modal}>
                        <div className={style.imagePreviewer}>
                            <ImCross onClick={() => setOpenModal(false)} className={style.close} />
                            <img src={imagePreview} alt='' />
                        </div>
                    </div>
                }
                <div className={style.gallery}>
                    <span>Gallery</span>
                    <div className={style.galleryEvents}>
                        <div className={style.bookreading}>
                            <img onClick={() => setShowBooks(true)} src={books} alt='Books' />
                        </div>
                        {
                            showBooks && <div className={style.reading}>
                                <div className={style.bookMainModal}>
                                    <div className={style.bookHeader}>
                                        <span className={style.bookHeading}>Book Reading</span>
                                        <IoMdCloseCircle onClick={() => setShowBooks(false)} className={style.bookClose} />
                                    </div>
                                    <div className={style.pics}>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie11)} src={selfie11} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie19)} src={selfie19} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie14)} src={selfie14} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie17)} src={selfie17} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie5)} src={selfie5} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie6)} src={selfie6} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie3)} src={selfie3} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie7)} src={selfie7} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie15)} src={selfie15} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie16)} src={selfie16} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie1)} src={selfie1} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie18)} src={selfie18} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie10)} src={selfie10} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie20)} src={selfie20} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie12)} src={selfie12} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie4)} src={selfie4} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie13)} src={selfie13} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie8)} src={selfie8} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie9)} src={selfie9} alt='' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={() => handleClick(selfie2)} src={selfie2} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className={style.rangmanch}>
                            <img onClick={() => setShowRangmanch(true)} src={rangmanch6} alt='rangmanch' />
                        </div>
                        {
                            showRangmanch && <div className={style.reading}>
                                <div className={style.bookMainModal}>
                                    <div className={style.bookHeader}>
                                        <span className={style.bookHeading}>Rangmanch Farms</span>
                                        <IoMdCloseCircle onClick={() => setShowRangmanch(false)} className={style.bookClose} />
                                    </div>
                                    <div className={style.pics}>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch1)} src={rangmanch1} alt='rangmanch' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch2)} src={rangmanch2} alt='rangmanch' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch3)} src={rangmanch3} alt='rangmanch' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch4)} src={rangmanch4} alt='rangmanch' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch5)} src={rangmanch5} alt='rangmanch' />
                                        </div>
                                        <div className={style.pic}>
                                            <img onClick={()=>handleClick(rangmanch6)} src={rangmanch6} alt='rangmanch' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={style.newsSection}>
                    <span>News and Announcements<sup className={style.coming}>Coming soon</sup></span>
                </div>
                <div className={style.companyEvents}>
                    <span>Company Events<sup className={style.coming}>coming soon</sup></span>
                </div>
            </main>
            <Footer />
        </div>
    )
}


export default LifeAtTechealerz