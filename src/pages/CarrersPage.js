import { useEffect, useState } from 'react'
import CarrerTile from '../components/CarrerTile'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import style from './styles/carrerspage.module.scss'
import axios from 'axios'
import teachnicalLead from '../assets/Technical Lead job description.pdf'
import dotNetDeveloper from '../assets/Dot Net Developer Job Description.pdf'
import solutionArchitect from '../assets/Solution Architect  job description.pdf'
import softwareEngg from '../assets/Software Engineer job description.pdf'
import plmConsultant from '../assets/PLM Consultant Job Description.pdf'
import accountant from '../assets/Accountant Job Description.pdf'
import teamcenterDeveloper from '../assets/Teamcenter Developer Job Description.pdf'
import cadConsultant from '../assets/CAD Consultant Job Description.pdf'
import autoCAD from '../assets/AutoCAD Customisation Consultant Job Description.pdf'
import programManager from '../assets/Program Manager Job Description.pdf'

const data = [
    {
        role: 'Teamcenter Solution Architect',
        vacancy: 1,
        experience: '10 - 12 Years',
        jd: solutionArchitect
    },
    {
        role: 'Dot Net Developer',
        vacancy: 1,
        experience: '1 - 4 Years',
        jd: dotNetDeveloper
    },
    {
        role: 'Technical Lead',
        vacancy: 2,
        experience: '4 - 8 Years',
        jd: teachnicalLead
    },
    {
        role: 'Software Engineer',
        vacancy: 1,
        experience: '1 - 4 Years',
        jd: softwareEngg
    },
    {
        role: 'PLM Consultant',
        vacancy: 1,
        experience: '4 - 6 Years',
        jd: plmConsultant
    },
    {
        role: 'Accountant Job',
        vacancy: 1,
        experience: 'fresher',
        jd: accountant
    }, {
        role: 'Teamcenter Developer',
        vacancy: 3,
        experience: 'Fresher',
        jd: teamcenterDeveloper
    }, {
        role: 'CAD Consultant',
        experience: '4 - 6 Years',
        jd: cadConsultant
    }, {
        role: 'AutoCAD Customisation',
        experience: '4 - 6 Years',
        jd: autoCAD,
        vacancy:1
    }, {
        role: 'Program Manager',
        experience:'10 - 15 Years',
        jd: programManager,
        vacancy:1
    }
]

function CarrersPage() {
    const [job, setJob] = useState([])
    async function getJobs() {
        try {
            const { data } = await axios.get('https://techealerz-backend.vercel.app/api/v1/getJobs')
            console.log(data)
            setJob(data.job)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getJobs()
    }, [])
    return (
        <div>
            <Navbar />
            <section className={style.carrers}>
                <h1>Current Job Opening</h1>
                <div className={style.tiles}>
                    {
                        data.map(ele => <CarrerTile role={ele.role} experience={ele?.experience} description={ele.jd} vacancy={ele.vacancy} />)
                    }
                    {job && job.map(ele => <CarrerTile role={ele.title} vacancy={ele.opening} experience={ele.experience} description={ele.description} />)}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CarrersPage