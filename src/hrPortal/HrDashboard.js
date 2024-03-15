import HrNavbar from "./HrNavbar"
import jobOpen from '../assets/job opening.png'
import JobOpeningTile from "../components/JobOpeningTile"
import styles from './styles/hrdashboard.module.scss'
import applicationStatus from '../assets/applicationstatus.jpg'


function Hr() {
    return (
        <div className={styles.mainWindow}>
            <HrNavbar />
            <div className={styles.tiles}>
                <JobOpeningTile role='hrdashboard' routing='jobopening'  ig={jobOpen} title='Create Opening' />
                <JobOpeningTile role='hrdashboard' routing='candidates' ig={applicationStatus} title='Application status' />
            </div>
        </div>
    )
}

export default Hr