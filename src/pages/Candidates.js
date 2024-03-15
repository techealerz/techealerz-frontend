import styles from './styles/candidates.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TableRow from '../components/TableRow'
import AdminDashboardNavbar from '../adminPortal/AdminDashboardNavbar'

function Candidates() {
    const [applicant, setApplicant] = useState([])
    const [expApplicant, setExpApplicant] = useState([])
    const [ctcApplicant, setCtcApplicant] = useState([])
    const [noticeApplicant, setNoticeApplicant] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const fetchData = async () => {
        try {
            const { data } = await axios.get('https://techealerz-backend.vercel.app/api/v1/getUsersData')
            setApplicant(data.applicants)
        } catch (error) {
            console.log('error is : ', error.message)
        }

    }

    function basedOnExp(e) {
        const filteredList = applicant?.filter(ele => {
            if (ele.totalExperience === e.target.value) {
                return ele
            }
        })
        console.log('based on exp : ', filteredList)
        setExpApplicant(filteredList)
    }

    function changeBasedOnCTC() {

        const filterList = applicant?.filter(ele => {
            if (ele.currentCTC <= '5') {
                return ele
            }
        })
        console.log('filtered list : ', filterList)
        setCtcApplicant(filterList)
    }

    function handleCTCchange(e) {
        console.log('handle CTC', e.target.value)
        changeBasedOnCTC()
    }

    function handleNoticePeriod(e) {
        const filteredList = applicant.filter((ele) => {
            if (ele.noticePeriod === e.target.value) {
                return ele
            }
        })
        setNoticeApplicant(filteredList)
    }

    function applyFilters() {
        // const uniqueId = new Set()
        // if(expApplicant || ctcApplicant || noticeApplicant){
        //     for(let i = 0 ; i < expApplicant.length ; i++){
        //         uniqueId.add(i._id)
        //     }
        //     for(let i = 0 ; i < ctcApplicant.length ; i++){
        //         uniqueId.add(i._id)
        //     }
        //     for(let i = 0 ; i < noticeApplicant.length ; i++){
        //         uniqueId.add(i._id)
        //     }
        //     console.log('unique id : ',uniqueId.values())
        // }
        console.log('exp : ',typeof(expApplicant.length))
        console.log('notice : ',noticeApplicant.length)
        console.log('ctc : ',ctcApplicant.length)

        // if (expApplicant.length > 0 && noticeApplicant.length === 0 && ctcApplicant === 0) {
        //     console.log('1')
        //     setApplicant(expApplicant)
        //     return
        // } else if (noticeApplicant.length > 0 && expApplicant.length === 0 && ctcApplicant.length === 0) {
        //     setApplicant(noticeApplicant)
        //     return
        // } else if (ctcApplicant.length > 0 && noticeApplicant.length === 0 && expApplicant.length === 0) {
        //     setApplicant(ctcApplicant)
        //     return
        // }else {
            const commonCandidates = expApplicant.filter(obj =>
                ctcApplicant.some(item => JSON.stringify(item) === JSON.stringify(obj) && noticeApplicant.some(item => JSON.stringify(item) === JSON.stringify(obj)))
            )
            console.log('comm : ', commonCandidates)
            setApplicant(commonCandidates)
            return
        // }
        

    }


    useEffect(() => {
        fetchData()
    }, [])

    // console.log('exp based : ',expApplicant)
    // console.log('applicants : ',applicant?.sort((a,b)=>{
    //     b.totalExperience - a.totalExperience
    // }))
    return (
        <div className={styles.candidatesMainWindow}>
            <AdminDashboardNavbar />
            <div className={styles.candidatesRecieved}>
                <h3>Applications Recieved</h3>
                <div className={styles.filterCandidates}>
                    <div className={styles.applyFilter}>
                        <label>Experience</label>
                        <select onChange={basedOnExp}>
                            <option value=''>Select...</option>
                            <option value='Fresher'>Fresher</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                    </div>
                    <div className={styles.applyFilter}>
                        <label>Current CTC</label>
                        <select onChange={handleCTCchange} name='CTC'>
                            <option>Select...</option>
                            <option value={5}>Less Than 5 LPA</option>
                            <option value={10}>Less Than 10 LPA</option>
                            <option value={15}>Less Than 15 LPA</option>
                            <option value={20}>Less Than 20 LPA</option>
                            <option value={25}>Less Than 25 LPA</option>
                            <option value={30}>Less Than 30 LPA</option>
                            <option value={31}>More Than 30 LPA</option>
                        </select>
                    </div>
                    <div className={styles.applyFilter}>
                        <label>Notice Period</label>
                        <select onChange={handleNoticePeriod}>
                            <option>Select...</option>
                            <option>Immediately</option>
                            <option>15 Days</option>
                            <option>30 Days</option>
                            <option>45 Days</option>
                            <option>60 Days</option>
                            <option>90 Days</option>
                        </select>
                    </div>
                    <button onClick={applyFilters} className={styles.applyBtn}>Apply</button>
                </div>
                <div className={styles.candiatesTable}>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>E-mail</th>
                                <th>Phone </th>
                                <th>Experience</th>
                                <th>Curr CTC</th>
                                <th>Exp CTC</th>
                                <th>Current Loc</th>
                                <th>Notice Period</th>
                                <th>HR</th>
                                <th>Admin</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                applicant.length ? applicant.map(ele => <TableRow key={ele?._id} firstName={ele?.firstName} lastName={ele?.lastName} email={ele?.email} phone={ele?.phone} totalExperience={ele?.totalExperience} currentCTC={ele?.currentCTC} currentLocation={ele?.currentLocation} noticePeriod={ele?.noticePeriod} hrApproval={ele?.hrApproval} adminApproval={ele?.adminApproval} id={ele?._id} />) : ''
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Candidates