import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from './styles/ourteam.module.scss'
import gurpreetPhoto from '../assets/Gurpreet Singh.jpg'
import ashwaniPhoto from '../assets/ashwani photo.jpg'
import garvitPhoto from '../assets/garvit.jpg'
import gauravPhoto from '../assets/gaurav photo.jpeg'
import princePhoto from '../assets/prince photo.jpeg'
import hrPhoto from '../assets/hardikHR.jpeg'
import nikasPhoto from '../assets/nikas photo.jpeg'
import { useEffect } from "react"

const data = [
    {
        id: 1,
        name: 'gurpreet singh',
        intro: 'Meet Gurpreet Singh, a Software Engineer at TecHealerz, an exceptional web developer whose creativity and talent has enabled the process of creating, building, designing and envisioning the TecHealerz website!! He is truly passionate about bringing ideas to life through his coding skills. In addition to his technical pursuits, he is an energetic Bhangra dancer who brings the traditional dance spirit alive with his mesmerizing performances, right from his college days, where he served as the Coordinator for the Bhangra Society!!',
        photo: gurpreetPhoto
    },
    {
        id: 2,
        name: 'garvit raheja',
        intro: 'Meet, Garvit Raheja, a Software Engineer at TecHealerz, an expressive and articulate speaker and a versatile Tech-blogger with a penchant for eloquent writing!! He specializes in finding innovative solutions through real-world problems. Beyond Coding, he is an avid cyclist, a basketball enthusiast, a travel and photography lover!! Recently, he has embraced the world of books to derive inspiration and pearls of wisdom from great Authors. Exploring the intersection of technology and creativity fuels his desire to contribute meaningfully to all our digital endeavours!!',
        photo: garvitPhoto
    },
    {
        id: 3,
        name: 'ashwani gupta',
        intro: 'Meet Ashwani Gupta, a Software Engineer at TecHealerz, he has an altruistic nature and lights up the world around him with his cheerful disposition, kindness, compassion and empathy!! He believes in leading a disciplined life and maintaining a good and healthy work environment. He is fascinated by statistical thinking and learning new technologies and skills for professional advancement. He aspires to travel around the world and explore new places to broaden his horizons and experience diverse cultures!! His hobbies include reading books, skating and playing badminton.',
        photo: ashwaniPhoto
    },
    {
        id: 4,
        name: ' gaurav singh',
        intro: 'Meet Gaurav Singh, a Software Engineer at TecHealerz, known for his calm and peaceful personality, his interests revolve around the enchanting world of music and the thrill of exploring new places. He believes that technology provides him an opportunity to combine his analytical and coding skills with his creative abilities to unlock unlimited possibilities!! His creativity also finds expression in his art work, be it, drawing, painting, or sketching. Whether he is immersed in soulful tunes or venturing into uncharted territories, these passions bring a unique rhythm to his Life!!',
        photo: gauravPhoto
    },
    {
        id: 5,
        name: 'nikas',
        intro: '  Meet Nikas Kaushik, a Software Engineer at TecHealerz, he is a Tech-Enthusiast, who is passionate about web development, tech-blogging and building Software tools. He loves gymnastics as it sets a strong foundation for developing a healthy body and mind along with building strength and flexibility. He has a deep interest in reading about social institutions which provide him immense knowledge about established mechanisms or patterns of social order, beliefs, behaviours and relationships focused on meeting social needs such as Government, economy, education, family, healthcare and religion.',
        photo:nikasPhoto
    },
    {
        id: 6,
        name: 'prince verma',
        intro: 'Meet Prince Verma, the Senior Accountant at TecHealerz, he is an expert in the field of accounting, taxation (Direct, Indirect/ DTAA), financial reporting, analysis and compliance and provides strategic insights to meet business goals and objectives. He aspires to become a seasoned Finance professional with business acumen and leadership skills to advise, plan, develop and support company’s finance and operations within the legal framework. He is a gifted artist with exceptional creativity and talent to create fine masterpieces with his drawing, painting and sketching skills! He captures the myriad hues of emotions and weaves a story through his aesthetic work of art which transcends the realm of human imagination and self-expression!! He loves dancing, playing chess, solving puzzles and playing outdoor sports. He is sharp, methodical, focused, detail-oriented, critical thinker, excellent team player and is always ready for challenges. He believes that sharing knowledge and ideas is fundamental to learning and growth.',
        photo: princePhoto
    },
    {
        id: 7,
        name: 'hardik sharma',
        intro: 'Meet Hardik Sharma, the Human Resources Manager at TecHealerz, he has a heart of gold and is driven by his personal values and desire to work for the welfare of society by undertaking philanthropic and humanitarian causes. He believes in kindness, compassion, generosity, humanity and selflessness. He is intrigued by complexities of the human mind and analysis of behaviour patterns to gain deeper understanding of human psychology in different situations. He loves singing and playing badminton during his leisure time. He also has a background in Computer Science Engineering, which provides him the technical edge for talent acquisition and team management with utmost efficiency. He is passionate about teamwork and leadership and brings a high level of commitment, optimism, motivation, innovation and energy in the workplace to create a sustainable environment and positive work culture for all. ',
        photo:hrPhoto
    }
]


function OurTeam() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Navbar />
            <div className={styles.mainWindow}>
                <p>OUR DIGITAL INNOVATION TEAM</p>
                {/* <div className={styles.testA}></div> */}
                <div className={styles.cards}>
                    {
                        data.map(ele => {
                            return (
                                <div key={ele?.id} className={styles.card}>
                                    <img src={ele?.photo} alt={ele?.name} />
                                    <div className={styles.memberInfo}>
                                        <p style={{ textTransform: 'uppercase' }}>{ele?.name}</p>
                                        <p style={{ fontWeight: '400', color: 'black', fontSize: '1rem' }}>{ele?.intro}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default OurTeam