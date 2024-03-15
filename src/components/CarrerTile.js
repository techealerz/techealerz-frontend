import style from './styles/carrertile.module.scss'
import engg from '../assets/Man programmer writing code and make web design on a PC.png'
import { Link } from 'react-router-dom'
import { Slide, Fade } from "react-awesome-reveal";

function CarrerTile({ role, vacancy, experience, description }) {
    console.log('des',description)
    return (
        <Slide direction='up' triggerOnce='true'>
            <Fade triggerOnce='true'>
                <div className={style.tile}>
                    <img src={engg} alt='' />
                    <p className={style.role}>{role}</p>
                    <p>Openings : {vacancy}</p>
                    <p>Experience : {experience}</p>
                    {/* <p>Job Description :{description}</p> */}
                    <div className={style.links}>
                        <Link to='/application'><button className={vacancy === 0 && style.dis}>Apply</button></Link>
                        <a href={description} download><button>Job Description</button></a>
                    </div>

                </div>
            </Fade>
        </Slide>
    )
}

export default CarrerTile