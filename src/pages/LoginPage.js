import style from './styles/loginpage.module.scss'
// import tcImg from '../assets/TecHealerzLogo-removebg-preview.png'
// import openEye from '../assets/icons8-eye-48.png'
// import closedEye from '../assets/icons8-invisible-48.png'
import { useState } from 'react'
import { RiAdminFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import OtpInput from 'react-otp-input';
import loadingGif from '../assets/loader.gif'
import axios from 'axios';
axios.defaults.withCredentials = true

function LoginPage() {
    // const [showPassword, setPassword] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [otp, setOtp] = useState('');
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const [isHrOpen, setIsHrOpen] = useState(false)
    const [isDigital, setIsDigital] = useState(false)
    const [adminCredentials, setAdminCredentials] = useState({
        adminName: '',
        adminPassword: ''
    })
    const [hrCredentials, setHrCredentials] = useState({
        hrName: '',
        hrPassword: ''
    })
    const [role, setRole] = useState('')
    function changeAdminCredentials(e) {
        setAdminCredentials({ ...adminCredentials, [e.target.name]: e.target.value })
    }

    function changeHrCredentials(e) {
        setHrCredentials({ ...hrCredentials, [e.target.name]: e.target.value })
    }

    async function adminLogin() {
        try {
            setShowLoader(true)
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/loginSuperUser', {
                username: adminCredentials.adminName,
                password: adminCredentials.adminPassword,
                role
            })
            if (data.success) {
                setIsOpen(true)
                console.log('data from backend is : ', data)
            } else {

                toast.error('Invalid Credentials')
            }
            setShowLoader(false)
        } catch (error) {
            toast.error(error.message)
            console.log('error from backend', error.message)
            setShowLoader(false)
        }
    }

    async function hrLogin() {
        try {
            setShowLoader(true)
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/loginSuperUser', {
                username: hrCredentials.hrName,
                password: hrCredentials.hrPassword,
                role
            })
            if (data.success) {
                setIsOpen(true)
                console.log('data from backend is : ', data)
            } else {

                toast.error('Invalid Credentials')
            }
            setShowLoader(false)
        } catch (error) {
            toast.error(error.message)
            console.log('error from backend', error.message)
            setShowLoader(false)
        }
    }


    async function checkOTP() {
        try {
            if (role === 'admin') {
                const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/otplogin', {
                    username: adminCredentials.adminName,
                    password: adminCredentials.adminPassword,
                    role: 'admin',
                    otp
                })
                if (data.success) {
                    toast.success('Login Successfully!!')
                    localStorage.setItem('login', true)
                    navigate('/admindashboard')
                }
            } else if (role === 'hr') {
                const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/otplogin', {
                    username: hrCredentials.hrName,
                    password: hrCredentials.hrPassword,
                    role,
                    otp
                })
                if (data.success) {
                    toast.success('Login Successfully!!')
                    localStorage.setItem('hrlogin', true)
                    navigate('/hrdashboard')
                }
            }

        } catch (error) {
            toast.error(error.message)
            console.log('error from backend', error.message)
        }
    }
    console.log('hr credentials : ', hrCredentials)
    console.log('role is : ', role)

    return (
        <div className={style.loginPage}>
            <div className={style.glass}>
                {
                    showLoader && <div className={style.loading}>
                        <img src={loadingGif} alt='' />
                    </div>
                }

                {
                    isOpen && <div className={style.modal}>
                        <div className={style.optLogin}>
                            <p style={{ color: 'var(--blue)', fontWeight: '500', fontSize: '1.4rem' }}>Enter OTP</p>
                            <span style={{ textAlign: 'center', fontWeight: '300', fontSize: '.9rem', marginTop: '.6rem' }}>Email has been at your registered email</span>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                // renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                                containerStyle={{ gap: '1.7rem', justifyContent: 'center' }}
                                inputStyle={style.otpInput}
                                inputType='tel'
                                skipDefaultStyles={true}
                            />
                            <button onClick={checkOTP}>Verify</button>
                        </div>
                    </div>
                }

                <Toaster />
                <div className={style.testA}></div>
                <div className={style.testB}></div>
                {/* admin */}
                <motion.div Layout className={isAdminOpen ? style.openModal : style.adminLogin}>
                    <motion.div layout className={style.alignCenter} >
                        <RiAdminFill onClick={() => {setIsAdminOpen(!isAdminOpen); setRole('admin')}} className={style.loginLogo} />
                        <p onClick={() => { setIsAdminOpen(!isAdminOpen); setRole('admin') }}>Admin Login</p>
                    </motion.div>
                    {
                        isAdminOpen && <motion.div
                            className={style.loginCard}
                            layout
                        >
                            <input onChange={changeAdminCredentials} value={adminCredentials.adminName} name='adminName' placeholder='username' />
                            <input type='password' onChange={changeAdminCredentials} value={adminCredentials.adminPassword} name='adminPassword' placeholder='password' />
                            <button onClick={adminLogin}>Login</button>
                        </motion.div>
                    }
                </motion.div>

                {/* hr */}

                <motion.div Layout className={isHrOpen ? style.openModal : style.hrLogin}>
                    <motion.div layout className={style.alignCenter} >
                        <RiAdminFill onClick={() => {setIsHrOpen(!isHrOpen); setRole('hr')}} className={style.loginLogo} />
                        <p onClick={() => { setIsHrOpen(!isHrOpen); setRole('hr') }}>HR Login</p>
                    </motion.div>
                    {
                        isHrOpen && <motion.div
                            className={style.loginCard}
                            layout
                        >
                            <input name='hrName' value={hrCredentials.hrName} onChange={changeHrCredentials} placeholder='username' />
                            <input name='hrPassword' value={hrCredentials.hrPassword} onChange={changeHrCredentials} type='password' placeholder='password' />
                            <button onClick={hrLogin}>Login</button>
                        </motion.div>
                    }
                </motion.div>

                {/* digital  */}

                {/* <motion.div Layout className={isDigital ? style.openModal : style.digitalMarketing}>
                    <motion.div layout className={style.alignCenter}>
                        <RiAdminFill onClick={() => setIsDigital(!isDigital)} className={style.loginLogo} />
                        <p onClick={() => setIsDigital(!isDigital)}>Digital Marketing</p>
                    </motion.div>
                    {
                        isDigital && <motion.div
                            className={style.loginCard}
                            layout
                        >
                            <input placeholder='username' />
                            <input type='password' placeholder='password' />
                            <button>Login</button>
                        </motion.div>
                    }
                </motion.div> */}
            </div>
        </div>
    )
}






export default LoginPage