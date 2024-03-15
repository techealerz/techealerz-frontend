import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineLogout } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import styles from './styles/jobopening.module.scss'
import axios from "axios";
import AdminDashboardNavbar from "../adminPortal/AdminDashboardNavbar";

function JobOpeningPage() {

    const navigate = useNavigate()
    const [job, setJob] = useState([])
    const [jData, setJData] = useState({
        title: '',
        experience: '',
        opening: '',
        description: ''
    })

    async function handleLogout() {
        try {
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/logout')
            if (data.success) {
                toast.success('Logout Successfully!')
                localStorage.removeItem('login')
                navigate('/login')

            }
            console.log('hadle logout called')
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
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

    function checkLogin() {
        const chackLogin = localStorage.getItem('login')
        if (chackLogin) {
        } else {
            navigate('/login')
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

    function handleChange(e) {
        setJData({ ...jData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        checkLogin()
        getJobs()
    }, [])

    return (
        <div className={styles.mainWindow}>
            <Toaster />
            <AdminDashboardNavbar />
            <div className={styles.sections}>
                <div className={styles.leftSection}>
                    <p style={{ textAlign: 'left', color: 'var(--blue)', fontSize: '1.7rem', fontWeight: '500' }}>Create Job Opening</p>
                    <div className={styles.content}>
                        <div className={styles.collectData}>
                            <div className={styles.dataInput}>
                                <label>Title</label>
                                <input onChange={handleChange} type="text" name='title' value={jData.title} placeholder="Title" />
                            </div>
                            <div className={styles.dataInput}>
                                <label>Experience</label>
                                <input onChange={handleChange} type="text" name='experience' value={jData.experience} placeholder="Experience" />
                            </div>
                            <div className={styles.dataInput}>
                                <label>Vacancy</label>
                                <input onChange={handleChange} type="text" name="opening" value={jData.opening} placeholder="Vacancy" />
                            </div>
                            <div className={styles.dataInput}>
                                <label>Decription</label>
                                <input onChange={handleChange} type='text' name='description' value={jData.description} placeholder="Description" />
                            </div>
                            <button onClick={createJob}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.rightSection}>
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

export default JobOpeningPage