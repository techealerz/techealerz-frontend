import { Link } from 'react-router-dom'
import style from './styles/jobopening.module.scss'
// import jobOpen from '../assets/job-opening.jpg'

function JobOpeningTile({ ig, title, routing, role }) {
    return (
        <div className={style.card}>
            <Link to={`/${role}/${routing}`}>
                <div className={style.image}>
                    <img src={ig} alt='' />
                </div>
                <p className={style.cardTitle}>{title}</p>
            </Link>
        </div>
    )
}

export default JobOpeningTile