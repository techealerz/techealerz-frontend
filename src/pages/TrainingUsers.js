import axios from "axios"
import AdminDashboardNavbar from "../adminPortal/AdminDashboardNavbar"
import styles from './styles/trainingusers.module.scss'
import { useEffect, useState } from "react"


function TrainingUsers() {
    const [training, setTraining] = useState([])
    
    async function getAllTrainingUsers() {
        try {
            const { data } = await axios.get('https://techealerz-backend.vercel.app/api/v1/getAllTrainingUsers')
            console.log('data ', data)
            setTraining(data.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllTrainingUsers()
    }, [])
    return (
        <div className={styles.mainWindow}>
            
            <AdminDashboardNavbar />
            <div className={styles.mainContent}>
                <p>Training Applicants</p>
                <div className={styles.trainingTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Experience</th>
                                <th>Highest Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                training?.map(ele => <tr>
                                    <td>{ele?.firstName}</td>
                                    <td>{ele?.lastName ? ele?.lastName : '-'}</td>
                                    <td style={{ textTransform: 'unset' }}>{ele?.email}</td>
                                    <td>{ele?.phone}</td>
                                    <td>{ele?.experience}</td>
                                    <td>{ele?.highestQualification}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TrainingUsers