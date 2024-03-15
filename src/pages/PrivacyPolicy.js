import { useEffect } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import styles from './styles/privacypolicy.module.scss'


function PrivacyPolicy() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Navbar />
            <div className={styles.mainContent}>
                <p className={styles.heading}>TERMS OF SERVICE AGREEMENT</p>
                <p className={styles.para}>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY
                    USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU
                    AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS
                    AGREEMENT.
                </p>
                <p className={styles.para}>
                    This Terms of Service Agreement governs your use of this
                    website, TecHealerz Solutions Private Limited offer of products for purchase on this
                    Website, or your purchase of products available on this Website. This Agreement
                    includes, and incorporates by this reference, the policies and guidelines referenced
                    below. TecHealerz Solutions Private Limited reserves the right to change or revise
                    the terms and conditions of this Agreement at any time by posting any changes or a
                    revised Agreement on this Website. TecHealerz Solutions Private Limited will alert
                    you that changes or revisions have been made by indicating on the top of this
                    Agreement the date it was last revised. The changed or revised Agreement will be
                    effective immediately after it is posted on this Website. Your use of the Website
                    following the posting any such changes or of a revised Agreement will constitute
                    your acceptance of any such changes or revisions. TecHealerz Solutions Private
                    Limited encourages you to review this Agreement whenever you visit the Website to
                    make sure that you understand the terms and conditions governing use of the
                    Website.
                </p>
                <p className={styles.bulletPoints}>
                    I. PRODUCTS
                </p>
                <p className={styles.para}>
                    Terms of Offer. This Website offers for sale certain products. By
                    placing an order for Products through this Website, you agree to the terms set forth
                    in this Agreement.
                </p>
                <p className={styles.para}>
                    <span className={styles.subheading}>
                        Customer Solicitation:
                    </span>
                    Unless you notify our third party call center reps or direct
                    TecHealerz Solutions Private Limited sales reps, while they are calling you, of your
                    desire to opt out from further direct company communications and solicitations, you
                    are agreeing to continue to receive further emails and call solicitations TecHealerz
                    Solutions Private Limited and its designated in house or third party call team(s).

                </p>
                <p className={styles.bulletPoints}>
                    II. LIMITATION OF LIABILITY
                </p>
                <p className={styles.para}>
                    TecHealerz Solutions Private Limited ENTIRE LIABILITY, AND YOUR EXCLUSIVE
                    REMEDY, IN LAW, IN EQUITY, OR OTHWERWISE, WITH RESPECT TO THE
                    WEBSITE CONTENT AND PRODUCTS AND/OR FOR ANY BREACH OF THIS
                    AGREEMENT IS SOLELYLIMITED TO THE AMOUNT YOU PAID, LESS SHIPPING
                    AND HANDLING, FOR PRODUCTS PURCHASED VIA THE WEBSITE.
                </p>
                <p className={styles.bulletPoints}>
                    III.INDEMNIFICATION
                </p>
                <p className={styles.para}>
                    You will release, indemnify, defend and hold harmless TecHealerz Solutions Private
                    Limited, and any of its contractors, agents, employees, officers, directors,
                    shareholders, affiliates and assigns from all liabilities, claims, damages, costs and
                    expenses, including reasonable attorneys' fees and expenses, of third parties
                    relating to or arising out of <br />
                    (1) this Agreement or the breach of your warranties, representations and obligations
                    under this Agreement <br /> (2) the Website content or your use of the Website content <br />
                    (3) the Products or your use of the Products (including Trial ProductsPRIVACY
                </p>
                <p className={styles.bulletPoints}>
                    VI. AGREEMENT TO BE BOUND
                </p>
                <p className={styles.para}>
                    By using this Website or ordering Products, you acknowledge that you have read
                    and agree to be bound by this Agreement and all terms and conditions on this
                    Website.
                </p>
                <p className={styles.bulletPoints}>
                    VIII. GENERAL
                </p>
                <p className={styles.para}>
                    TecHealerz Solutions Private Limited will not be deemed in default
                    hereunder or held responsible for any cessation, interruption or delay in the
                    performance of its obligations hereunder due to earthquake, flood, fire, storm,
                    natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or
                    boycott.
                    Cessation of Operation. TecHealerz Solutions Private Limited may at any time, in
                    its sole discretion and without advance notice to you, cease operation of the Website
                    and distribution of theProducts.
                    Termination. TecHealerz Solutions Private Limited reserves the right to terminate
                    your access to the Website if it reasonably believes, in its sole discretion, that you
                    have breached any of the terms and conditions of this Agreement. Following
                    termination, you will not be permitted to use the Website and TecHealerz Solutions
                    Private Limited may, in its sole discretion and without advance notice to you, cancel
                    any outstanding orders for Products. If your access to the Website is terminated,
                    TecHealerz Solutions Private Limited reserves the right to exercise whatever
                    means it deems necessary to prevent unauthorized access of the Website. This
                    Agreement will survive indefinitely unless and until TecHealerz Solutions Private
                    Limited chooses, in its sole discretion and without advance to you, to terminate it.

                </p>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy