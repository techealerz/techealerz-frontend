import styles from './styles/hrnavbar.module.scss'
import logo from '../assets/TecHealerzLogo-removebg-preview.png'
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

function HrNavbar() {
    const navigate = useNavigate()
    function checkLogin(){
        if(!localStorage.getItem('hrlogin')){
            navigate('/login')
        }
    }

    async function handleLogout() {
        try {
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/logout')
            if (data.success) {
                toast.success('Logout Successfully!')
                localStorage.removeItem('hrlogin')
                navigate('/login')

            }
            console.log('handle logout called')
        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }

    useEffect(()=>{
        checkLogin()
    },[])
    return (
        <div className={styles.mainNav}>
            <div className={styles.topSection}>
                <img src={logo} alt='logo' />
                <span className={styles.dashboard}>HR Dashboard</span>
            </div>
            <div onClick={handleLogout} className={styles.logoutSection}>
                <span>Logout</span>
                <AiOutlineLogout />
            </div>
        </div>
    )
}

export default HrNavbar