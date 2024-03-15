import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import style from './styles/servicespage.module.scss';
import dataMigrationPhoto from '../assets/data migration.webp';
import staffAugmentationPhoto from '../assets/staff agumentation.png';
import dataIntegrationPhoto from '../assets/data integration.webp';
import staffContractingPhoto from '../assets/staff contracting.png';
import productionSupportPhoto from '../assets/production supports.png'
import implentationServicesPhoto from '../assets/implementation services.png'
import { useEffect } from "react";

const data = [
    {
        id: 1,
        heading: 'Teamcenter IMPLEMENTATION SERVICES',
        paragraph: 'Specialization in all areas like Document Management, Part and BOM Management, Workflow Change Management and other Advanced PLM Modules',
        image: implentationServicesPhoto
    },
    {
        id: 2,
        heading: 'DATA MIGRATION SERVICES',
        paragraph: 'Data Migrations from legacy PLM systems to Teamcenter PLM Systems.',
        image: dataMigrationPhoto
    },
    {
        id: 3,
        heading: 'Teamcenter INTEGRATION SERVICES',
        paragraph: 'Teamcenter PLM Integration Services to integrate PLM Systems with CAD tools and ERP Systems.',
        image: dataIntegrationPhoto
    },
    {
        id: 4,
        heading: 'PLM STAFF AUGMENTATION',
        paragraph: 'Our expert resources are available to fill the skillset gaps in your project team which includes Project Managers, Solution Architects, Technical Leads, Implementation Engineers / Developers and QA Engineers / Testers',
        image: staffAugmentationPhoto
    },
    {
        id: 5,
        heading: 'SUB-CONTRACTING',
        paragraph: 'We can take subsets of complex Work Packages or critical Tracks in the project and deliver the best value for your investment',
        image: staffContractingPhoto
    },
    {
        id: 6,
        heading: 'PRODUCTION / POST GO-LIVE SUPPORT',
        paragraph: 'We provide complete team of Technical Leads and Support Engineers for Post Go-Live Production Support.',
        image: productionSupportPhoto
    }
]

function ServicesPage() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <div>
            <Navbar />
            <section className={style.cards}>
                {
                    data.map(ele => <Services image={ele.image} heading={ele.heading} paragraph={ele.paragraph} />)
                }
            </section>
            <Footer />
        </div>
    )
}

export default ServicesPage