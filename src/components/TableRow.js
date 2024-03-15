import { useState } from 'react'
import './styles/tableRow.scss'
import axios from 'axios'

function TableRow({ firstName, lastName, email, phone, totalExperience, currentCTC, expectedCTC, currentLocation, noticePeriod, hrApproval, adminApproval, id }) {
    const [app, setApp] = useState({
        hrApp: hrApproval,
        adminApp: adminApproval
    })
    function handleChange(e) {
        console.log(e.target.value)
        try {
            setApp({ ...app, [e.target.name]: e.target.value })
        } catch (error) {
            console.log('error is : ', error)
        }

    }

    async function handleClick() {
        try {
            console.log('click',id)
            const { data } = await axios.patch('https://techealerz-backend.vercel.app/api/v1/updateUser', {
                id,
                hrApproval: app.hrApp,
                adminApproval:app.adminApp
            })
            if(data.success){
                console.log('success')
                window.location.reload()
            }
        } catch (error) {
            console.log('error : ',error)
        }

    }

    const hrLogin = localStorage.getItem('hrlogin')
    // console.log(`values are ${app.hrApp} ${app.adminApp}`)
    return (
        <tr >
            <td>{firstName}</td>
            <td>{lastName ? lastName : '-'}</td>
            <td style={{ textTransform: 'unset' }}>{email}</td>
            <td>{phone}</td>
            <td>{totalExperience}</td>
            <td>{currentCTC ? currentCTC : '-'}</td>
            <td>{expectedCTC ? expectedCTC : '-'}</td>
            <td>{currentLocation ? currentLocation : '-'}</td>
            <td>{noticePeriod ? noticePeriod : '-'}</td>
            <td>
                <select name='hrApp' onChange={handleChange} className={hrApproval} value={app.hrApp}>
                    <option name='pending' value='pending'>
                        pending
                    </option>
                    <option name='rejected' value='rejected'>Rejected</option>
                    <option name='approved' value='approved'>Approved</option>
                </select>
            </td>
            <td>
                {
                    !hrLogin && <select name='adminApp' onChange={handleChange} className={adminApproval} value={app.adminApp}>
                        <option name='pending' value='pending'>
                            pending
                        </option>
                        <option name='rejected' value='rejected'>Rejected</option>
                        <option name='approved' value='approved'>Approved</option>
                    </select>
                }

            </td>
            <td><button onClick={handleClick}>Apply</button></td>
        </tr>
    )
}

export default TableRow