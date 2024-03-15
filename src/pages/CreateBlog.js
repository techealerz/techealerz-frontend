import { useState } from 'react'
import AdminDashboardNavbar from '../adminPortal/AdminDashboardNavbar'
import style from './styles/createblog.module.scss'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';

function CreateBlog() {
    const [blogData, setBlogData] = useState({
        title: '',
        imageLink: '',
        description: ''
    })

    function handleChange(e) {
        setBlogData({ ...blogData, [e.target.name]: e.target.value })
    }

    async function handleClick() {
        try {
            if (blogData.title === '' || blogData.description === '') {
                toast.error('Please fill the required fields')
                return
            }
            const { data } = await axios.post('https://techealerz-backend.vercel.app/api/v1/createBlog', {
                title: blogData.title,
                image: blogData.imageLink,
                description: blogData.description
            })
            if (data.success) {
                toast.success('Created successfully')
                setBlogData({
                    title: '',
                    imageLink: '',
                    description: ''
                })
            }
        } catch (error) {
            console.log('error is : ', error)
        }
    }

    return (
        <div className={style.mainWindow}>
            <AdminDashboardNavbar />
            <Toaster />
            <div className={style.createBlog}>
                <p style={{ color: 'var(--blue)', fontSize: '2rem' }}>Create Blog</p>
                <div className={style.inputs}>
                    <label>Title</label>
                    <input onChange={handleChange} name='title' value={blogData.title} placeholder='Title' />
                </div>
                <div className={style.inputs}>
                    <label>Image Link</label>
                    <input onChange={handleChange} name='imageLink' value={blogData.imageLink} placeholder='Image' />
                </div>
                <div className={style.inputs}>
                    <label>Description</label>
                    <textarea onChange={handleChange} name='description' value={blogData.description} rows={10} placeholder='Description' />
                </div>
                <button onClick={handleClick}>
                    create blog
                </button>
            </div>
        </div>
    )
}

export default CreateBlog