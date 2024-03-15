import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from './styles/clientfeedback.module.scss'
import { Rating } from 'react-simple-star-rating'

function ClientFeedBack() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div className={styles.mainWindow}>
            <Navbar />
            <div className={styles.mainContent}>
                <h4 className={styles.pageHeading}>Client Feedback form</h4>
                <div className={styles.clientForm}>
                    <div className={styles.inputs}>
                        <label>Name<span>*</span></label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>Email ID<span>*</span></label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>Organisation Name<span>*</span></label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>Project<span>*</span></label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>What made you choose our services?</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>What features/qualities did you like about our services?</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>What would be the main reason for you to recommend our services to others</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>What were the challenges or problems faced by your Organization which we were able to resolve through our services?</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>Kindly share your feedback and suggestions on how we can improve our services?</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>Please consider leaving a testimonial. It would be extremely helpful to hear what you thought about our services.</label>
                        <input type='text' />
                    </div>
                    <div className={styles.inputs}>
                        <label>How would you like to rate our services?</label>
                        <Rating
                            onClick={handleRating}
                            transition={true}
                            allowFraction={true}
                        /* Available Props */
                        />
                    </div>
                    {/* <div className={styles.inputs}>
                        <label>I grant you the right and permission to publicly disclose my testimonial</label>
                        <input type='radio' /><span>True</span>
                        
                    </div> */}
                    
                  
                </div>
                <button>Submit</button>
            </div>
            <Footer />
        </div>
    )
}

export default ClientFeedBack