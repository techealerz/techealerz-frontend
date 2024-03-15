import { Link } from 'react-router-dom'
import pageNotFound from '../assets/page-not-found.gif'
import styles from './styles/pagenotfound.module.scss'

function PageNotFound() {
    return (
        <div className={styles.mainWindow}>
            <img src={pageNotFound} alt='page not found' />
            <button><Link to='/'>Home Page</Link></button>
        </div>
    )
}

export default PageNotFound