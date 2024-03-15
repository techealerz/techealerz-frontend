import style from './styles/services.module.scss'
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
function Services({ heading, paragraph, image }) {
    return (
        <Fade>
            <Slide direction='up' triggerOnce='true'>
                <div className={style.card}>
                    <img src={image} alt={heading} />
                    <h1 style={{ textTransform: 'uppercase' }}>{heading}</h1>
                    <p>{paragraph}</p>
                </div>
            </Slide>
        </Fade>
    )
}

export default Services