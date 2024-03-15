import style from './styles/trainingpage.module.scss'
import trainingImage from '../assets/training-page-image.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PhoneInput from 'react-phone-input-2'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import loader from '../assets/loader.gif'
import axios from 'axios'

function TrainingPage() {
    const [showLoader, setShowLoader] = useState(false)
    const [phone, setPhone] = useState()
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        email: '',
        experience: '',
        highestQualification: ''
    })
    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    async function handleClick() {
        try {
            if (userData.fName === '' || userData.email === '' || phone === undefined) {
                toast.error('Please fill the required fields')
                return
            }
            setShowLoader(true)
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/createTrainingUser', {
                firstName: userData.fName,
                lastName: userData.lName,
                email: userData.email,
                phone: phone,
                experience: userData.experience,
                highestQualification: userData.highestQualification
            })
            if (data.success) {
                toast.success('Application Submitted Successfully!')
                setUserData({
                    fName: '',
                    lName: '',
                    email: '',
                    experience: '',
                    highestQualification: ''
                })
                setPhone()
                setShowLoader(false)
            }
        } catch (error) {
            console.log(error)
            setShowLoader(false)
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    console.log(phone)

    return (
        <div className={style.mainWindow}>
            <Navbar />
            {
                showLoader && <div className={style.loading}>
                    <img src={loader} alt='loader' />
                </div>
            }
            <div className={style.mainContent}>
                <Toaster />
                <div className={style.section1}>
                    <p className={style.heading}>TecHealerz Training academy</p>
                    <div className={style.testA}></div>
                    <p>
                        Are you interested in learning Teamcenter PLM skills and grow in your career?<br />If yes stay tuned!!
                        <br /><span style={{ color: "var(--blue)", fontWeight: "500", textAlign: "center", display: "block", fontSize: '1.2rem' }}>We are launching soon...</span>
                    </p>
                    <p>
                        Sign up to be the first to get notified, when we launch!!
                    </p>
                    <div className={style.userInfo}>
                        <div className={style.userInput}>
                            <label>First Name<span>*</span></label>
                            <input onChange={handleChange} name='fName' value={userData.fName} placeholder='First Name' />
                        </div>
                        <div className={style.userInput}>
                            <label>Last Name</label>
                            <input onChange={handleChange} name='lName' value={userData.lName} placeholder='Last Name' />
                        </div>
                        <div className={style.userInput}>
                            <label>Email<span>*</span></label>
                            <input onChange={handleChange} name='email' value={userData.email} placeholder='E-Mail' />
                        </div>
                        <div className={style.userInput}>
                            <label>Contact<span>*</span></label>
                            <PhoneInput
                                country={'in'}
                                inputStyle={{ width: '100%', padding: ".5rem", paddingLeft: '3rem' }}
                                value={phone}
                                onChange={setPhone}
                            // inputProps={{
                            //     name: 'phone',
                            //     required: true,
                            //     autoFocus: true
                            //   }}
                            />
                        </div>
                        <div className={style.userInput}>
                            <label>Experience<span>*</span></label>
                            <input onChange={handleChange} name='experience' value={userData.experience} placeholder='Experience' />
                        </div>
                        <div className={style.userInput}>
                            <label>Highest Qualification<span>*</span></label>
                            <input onChange={handleChange} name='highestQualification' value={userData.highestQualification} placeholder='Highest Qualification' />
                        </div>
                        <button onClick={handleClick}>Submit</button>
                    </div>
                    <p style={{ color: 'var(--blue)', fontSize: '1.2rem', fontWeight: '500' }}>We promise to never spam you!!</p>

                </div>
                <div className={style.section2}>
                    <img src={trainingImage} alt='Training' />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TrainingPage