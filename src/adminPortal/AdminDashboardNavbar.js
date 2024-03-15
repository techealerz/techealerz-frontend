import styles from './styles/admindashboardnavbar.module.scss'
import tecHealerzLogo from '../assets/TecHealerzLogo-removebg-preview.png'
import { IoMdLogOut } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function AdminDashboardNavbar() {

    const navigate = useNavigate()

    function checkLogin() {
        if (localStorage.getItem('login')) {

        } else {
            navigate('/login')
        }
    }

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

    useEffect(()=>{
        checkLogin()
    },[])

    return (
        <div className={styles.mainNavbar}>
            <div className={styles.topSection}>
                <img src={tecHealerzLogo} alt='logo' />
                <p>Admin Dashboard</p>
            </div>
            <div onClick={handleLogout} className={styles.bottomSection}>
                <Toaster />
                <IoMdLogOut style={{color:'white'}} />
                <p>logout</p>
            </div>
        </div>
    )
}


export default AdminDashboardNavbar