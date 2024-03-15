import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import style from './styles/elearning.module.scss'
import eLearningPic from '../assets/e-learning.jpg'
import youtubeLearning from '../assets/youtube-learning.jpg'
import techBlogPic from '../assets/techblog.jpg'
// import otherBlogPic from '../assets/otherblog.jpg'
import { Link } from "react-router-dom"
import { useEffect } from "react"

function ELearning() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Navbar />
            <main className={style.mainSection}>
                <div className={style.youtbeSection}>
                    <span>
                        Training & Youtube Videos
                    </span>
                    <div className={style.externalLinks}>
                        <div className={style.externalLink}>
                            <div>
                                <img src={eLearningPic} alt='' />
                            </div>
                            <p>training videos</p>
                        </div>
                        <a href="https://www.youtube.com/@TecHealerz" target="_blank" rel="noreferrer" >
                            <div className={style.externalLink}>

                                <div>
                                    <img src={youtubeLearning} alt='' />
                                </div>
                                <p>Youtube Videos</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={style.blogsSection}>
                    <span>Blogs</span>
                    <div className={style.blogsSection}>
                        <div className={style.blogsDescription}>
                            <Link to='/getBlogs'>
                                <div>
                                    <img src={techBlogPic} alt='' />
                                </div>
                                <p>Knowledge Centre</p>
                            </Link>
                        </div>
                        {/* <div className={style.blogsDescription}>
                            <div>
                                <img src={otherBlogPic} alt='' />
                            </div>
                            <p>Other Blogs</p>
                        </div> */}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    )
}

export default ELearning