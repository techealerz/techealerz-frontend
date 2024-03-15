import JobOpeningTile from '../components/JobOpeningTile'
import style from './styles/admindashboard.module.scss'
import jobOpen from '../assets/job opening.png'
import appStatus from '../assets/app status.png'
import writeBlog from '../assets/create-blog.png'
import allBlogs from '../assets/all blogs.png'
import applicationStatus from '../assets/applicationstatus.jpg'
// import { AiOutlineLogout } from "react-icons/ai";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';
// import axios from 'axios'
import AdminDashboardNavbar from './AdminDashboardNavbar'

function AdminDashboard() {
    const navigate = useNavigate()

    // async function handleLogout() {
    //     try {
    //         const { data } = await axios.post('http://localhost:8000/api/v1/logout')
    //         if (data.success) {
    //             toast.success('Logout Successfully!')
    //             localStorage.removeItem('login')
    //             navigate('/login')

    //         }
    //         console.log('hadle logout called')
    //     } catch (error) {
    //         toast.error(error.message)
    //         console.log(error.message)
    //     }
    // }

    function checkLogin() {
        const chackLogin = localStorage.getItem('login')
        if (chackLogin) {
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        checkLogin()
    })
    return (
        <div className={style.mainWindow}>
            {/* <Toaster /> */}
                <AdminDashboardNavbar />
                {/* <div className={style.dashBoardTop}>
                    <p>Admin  Dashboard</p>
                    <div onClick={handleLogout} className={style.logout}>
                        <AiOutlineLogout className={style.logoutIcon} />
                        <p>Logout</p>
                    </div>
                </div> */}
                <main className={style.tiles}>
                    <JobOpeningTile role='admindashboard' routing='jobopening' ig={jobOpen} title='Create Opening' />
                    <JobOpeningTile role='admindashboard' routing='candidates' ig={applicationStatus} title='Application status' />
                    <JobOpeningTile role='admindashboard' routing='createblog' ig={writeBlog} title='create blog' />
                    <JobOpeningTile role='admindashboard' routing='allblogs' ig={allBlogs} title='Current blogs' />
                    <JobOpeningTile role='admindashboard' routing='getalltrainingusers' ig={appStatus} title='Training Candidates' />
                </main>

        </div>
    )
}

export default AdminDashboard