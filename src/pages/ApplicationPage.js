import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import style from './styles/application.module.scss'
import { Fade } from "react-awesome-reveal"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import loader from '../assets/loader.gif'


const expOptions = [
    {
        id: 1,
        value: 'Fresher'
    }, {
        id: 2,
        value: '1',
    }, {
        id: 3,
        value: '2',
    }, {
        id: 4,
        value: '3'
    }, {
        id: 5,
        value: '4',
    }, {
        id: 6,
        value: '5'
    }, {
        id: 7,
        value: '6'
    }, {
        id: '8',
        value: '7',
    }, {
        id: '9',
        value: '8'
    }, {
        id: '10',
        value: '9'
    }, {
        id: '11',
        value: '10'
    }, {
        id: '12',
        value: '10+'
    }
]

const noticePeriod = [
    {
        id: 1,
        value: 'Immediately'
    }, {
        id: 2,
        value: '15 Days'
    }, {
        id: 3,
        value: '30 Days',
    }, {
        id: 4,
        value: '45 Days'
    }, {
        id: 5,
        value: '60 Days'
    }, {
        id: 6,
        value: '90 Days'
    }
]

function ApplicationPage() {
    const [showLoader, setShowLoader] = useState(false)
    const [phone, setPhone] = useState()
    const [userData, setUserData] = useState({
        fName: '',
        lName: '',
        email: '',
        currentCompany: '',
        totalExp: '',
        currentCTC: '',
        expectedCTC: '',
        resume: '',
        portfolioLink: '',
        currentLocation: '',
        noticePeriod: ''
    })

    function handleChange(e) {
        setUserData({
            ...userData, [e.target.name]: e.target.value
        })
    }

    function handlePdf(e) {
        setUserData({
            ...userData, resume: e.target.files[0]
        })
    }

    async function handleClick(e) {
        e.preventDefault()
        console.log(phone)
        if (userData.fName === '' || userData.email === '' || phone === '' || userData.resume === '' || userData.currentCTC === '' || userData.noticePeriod === '' || userData.totalExp === '') {
            toast.error('Pealse fill the required fields!')
        } else {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (emailRegex.test(userData.email)) {
                if (phone.toString().length < 11) {
                    toast.error('Please enter valid phone number')
                    return
                } else {
                    const formData = new FormData()
                    formData.append('firstName', userData.fName)
                    formData.append('lastName', userData.lName)
                    formData.append('email', userData.email)
                    formData.append('phone', phone)
                    formData.append('currentCompany', userData.currentCompany)
                    formData.append('totalExperience', userData.totalExp)
                    formData.append('currentCTC', userData.currentCTC)
                    formData.append('exprectedCTC', userData.expectedCTC)
                    formData.append('pdfFile', userData.resume)
                    formData.append('portfolioLink', userData.portfolioLink)
                    formData.append('currentLocation', userData.currentLocation)
                    formData.append('noticePeriod', userData.noticePeriod)

                    try {
                        setShowLoader(true)
                        const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/addUser', formData)
                        console.log('data recieved from backend', data)
                        toast.success('Application submitted successfully!')
                        setUserData({
                            fName: '',
                            lName: '',
                            email: '',
                            currentCompany: '',
                            totalExp: '',
                            currentCTC: '',
                            expectedCTC: '',
                            resume: '',
                            portfolioLink: '',
                            currentLocation: '',
                            noticePeriod: ''
                        })
                        setPhone()
                        setShowLoader(false)
                    } catch (error) {
                        console.log('error is : ', error)
                        toast.error('You can apply after 6 months')
                        setUserData({
                            fName: '',
                            lName: '',
                            email: '',
                            currentCompany: '',
                            totalExp: '',
                            currentCTC: '',
                            expectedCTC: '',
                            resume: '',
                            portfolioLink: '',
                            currentLocation: '',
                            noticePeriod: ''
                        })
                        setPhone()
                        setShowLoader(false)
                    }

                }

            } else {
                toast.error('Please enter valid email!')
            }

        }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    console.log('user data is : ', userData)


    return (
        <div>
            {
                showLoader && <div style={{ position: 'fixed', width: '100%', height: '100%', zIndex: '100', backgroundColor: 'rgba(0,0,0,.17)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img style={{ width: '80px' }} src={loader} alt='loader' /></div>
            }
            <Navbar />
            <Fade triggerOnce='true'>
                <section className={style.section1}>

                    <Toaster />
                    <h1>
                        application form
                    </h1>
                    <form encType="multipart/form-data" className={style.applicationForm}>
                        <div className={style.input}>
                            <label>First Name<span>*</span></label>
                            <input type="text" name='fName' value={userData.fName} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Last Name</label>
                            <input type="text" name='lName' value={userData.lName} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Email<span>*</span></label>
                            <input type="email" name="email" value={userData.email} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Phone<span>*</span></label>
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

                            {/* <label>Phone</label>
                            <input type='number' /> */}
                        </div>
                        <div className={style.input}>
                            <label>Current Company</label>
                            <input type='text' name="currentCompany" value={userData.currentCompany} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Total Experience<span>*</span></label>
                            {/* <input type='text' name='totalExp' value={userData.totalExp} onChange={handleChange} /> */}
                            <select name='totalExp' value={userData.totalExp} onChange={handleChange} >
                                <option>Select</option>
                                {
                                    expOptions.map(ele => {
                                        return (<option value={ele.value}>{ele.value}</option>)
                                    })
                                }
                            </select>
                        </div>
                        <div className={style.input}>
                            <label>Current CTC<span>*</span></label>
                            <input type='number' name="currentCTC" value={userData.currentCTC} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Expected CTC</label>
                            <input type='number' name='expectedCTC' value={userData.expectedCTC} onChange={handleChange} />
                        </div>
                        <div className={style.Fileinput}>
                            <label>Resume upload<span>*</span></label>
                            <input type='file' accept=".pdf" onChange={handlePdf} />
                        </div>
                        <div className={style.input}>
                            <label>Portfolio Link</label>
                            <input type='text' name="portfolioLink" value={userData.portfolioLink} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Current Location</label>
                            <input type='text' name="currentLocation" value={userData.currentLocation} onChange={handleChange} />
                        </div>
                        <div className={style.input}>
                            <label>Notice Period<span>*</span></label>
                            {/* <input type='text' name='noticePeriod' value={userData.noticePeriod} onChange={handleChange} /> */}
                            <select name='noticePeriod' value={userData.noticePeriod} onChange={handleChange}>
                                <option>Select</option>
                                {
                                    noticePeriod.map(ele => {
                                        return (<option>{ele.value}</option>)
                                    })
                                }
                            </select>
                        </div>
                        {/* <div className={style.input}><button>Submit</button></div> */}
                    </form>
                    <button onClick={handleClick}>Submit</button>
                </section>
            </Fade>
            <Footer />
        </div>
    )
}

export default ApplicationPage