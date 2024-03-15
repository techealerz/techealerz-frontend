import { useState, useEffect } from "react"
import HrNavbar from "../hrPortal/HrNavbar"
import styles from './styles/hrjobopening.module.scss'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function HrJobOpening() {

    const [job, setJob] = useState([])
    const [jData, setJData] = useState({
        title: '',
        experience: '',
        opening: '',
        description: ''
    })

    function handleChange(e) {
        setJData({ ...jData, [e.target.name]: e.target.value })
    }

    async function getJobs() {
        try {
            const { data } = await axios.get('https://techealerz-backend.vercel.app/api/v1/getJobs')
            console.log(data)
            setJob(data.job)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function createJob() {
        try {
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/createJob', {
                title: jData.title,
                experience: jData.experience,
                opening: jData.opening,
                description: jData.description
            })
            toast.success('Created Successfully!')
            setJData({
                title: '',
                experience: '',
                opening: '',
                description: ''
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    async function deleteJob(id) {
        try {
            console.log('id reciedv for delete : ', id)
            const { data } = await axios.delete(`https://techealerz-backend.vercel.app/api/v1/deleteJob/${id}`)
            console.log('data from backend : ', data)
            toast.success('Deleted Successfully!!')

        } catch (error) {
            console.log('error is : ', error)
        }
    }

    console.log(jData)

    useEffect(() => {
        getJobs()
    }, [])

    return (
        <div className={styles.mainWindow}>
            <HrNavbar />
            <Toaster />
            <div className={styles.jobForm}>
                <div className={styles.createJob}>
                    <p className={styles.jobOpeningTitle}>Create job opening</p>
                    <div className={styles.jobMainForm}>
                        <div className={styles.inputs}>
                            <span>Title</span>
                            <input name='title' type="text" onChange={handleChange} value={jData.title} placeholder="Title" />
                        </div>
                        <div className={styles.inputs}>
                            <span>Experience</span>
                            <input name='experience' type="text" onChange={handleChange} value={jData.experience} placeholder="Experience" />
                        </div>
                        <div className={styles.inputs}>
                            <span>Vacancy</span>
                            <input name="opening" type="text" onChange={handleChange} value={jData.opening} placeholder="Vacancy" />
                        </div>
                        <div className={styles.inputs}>
                            <span>Description</span>
                            <input type="text" name='description' onChange={handleChange} value={jData.description} placeholder="Description" />
                        </div>
                        <button onClick={createJob} className={styles.submitButton}>Submit</button>
                    </div>
                </div>
                <div className={styles.currentVacancy}>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Experience</th>
                                <th>Vacancy</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                job?.map(ele => <tr key={ele?._id}>
                                    <td>{ele?.title}</td>
                                    <td>{ele?.experience}</td>
                                    <td>{ele?.opening}</td>
                                    <td><button onClick={() => deleteJob(ele?._id)}>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HrJobOpening