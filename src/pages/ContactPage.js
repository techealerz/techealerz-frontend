import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import style from './styles/contactpage.module.scss'

function ContactPage() {

    const [collectData, setCollectData] = useState({
        fName: '',
        lName: '',
        email: '',
        message: ''
    })

    function changeData(e) {
        setCollectData({ ...collectData, [e.target.name]: e.target.value })
    }

    async function handleClick() {

        if (collectData.fName === '' || collectData.email === '' || collectData.message === '') {

            toast.error('Pealse fill the required fields!')
        } else {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            // console.log(emailRegex.test(collectData.email))
            if (emailRegex.test(collectData.email)) {
                try {
                    const { data } = await axios.post('https://techealerz-backend.vercel.app/userMessage', {
                        fName: collectData.fName,
                        lName: collectData.lName,
                        email: collectData.email,
                        message: collectData.message
                    })
                    console.log('data is : ',data)
                    if (data.success) {
                        setCollectData({
                            fName: '',
                            lName: '',
                            email: '',
                            message: ''
                        })
                        toast.success('Message sent successfully');
                    }

                } catch (error) {
                    toast.error(error.message)
                }


            } else {
                toast.error('Please enter valid email!')
            }

        }
    }

    return (
        <div>
            <Navbar />
            <section className={style.section1}>
                <h1>Contact us</h1>
                <p>Get in touch with us Today!!</p>
                <div className={style.contactUsSection}>
                    <div className={style.contactUsForm}>
                        <div className={style.input}>
                            <label>First Name<sup>*</sup></label>
                            <input name='fName' value={collectData.fName} onChange={changeData} type="text"></input>
                        </div>

                        <div className={style.input}>
                            <label>Last Name</label>
                            <input name='lName' value={collectData.lName} onChange={changeData} type="text"></input>
                        </div>

                        <div className={style.input}>
                            <label>Email<sup>*</sup></label>
                            <input name='email' value={collectData.email} onChange={changeData} type="email"></input>
                        </div>

                        <div className={style.input}>
                            <label>Message<sup>*</sup></label>
                            <textarea rows='6' name='message' onChange={changeData} value={collectData.message}></textarea>
                        </div>
                        <button onClick={handleClick}>Submit</button>
                        <Toaster />
                    </div>
                    <div className={style.info}>
                        <p>The specific needs of your company are unique to you. Send us a message and we can help you find the right services and solutions that best fit your needs. </p>
                        <p>hr@techealerz.com</p>
                        <p>TecHealerz Solutions Private Limited</p>
                        <p> Gurugram, Haryana, India</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactPage