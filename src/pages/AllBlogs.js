import axios from "axios"
import AdminDashboardNavbar from "../adminPortal/AdminDashboardNavbar"
import styles from './styles/allblogs.module.scss'
import { useEffect, useState } from "react"


function AllBlogs() {

    const [blog,setBlog] = useState([])
    async function getAllBlogs(){
        try {
            const {data} = await axios.get('https://techealerz-backend.vercel.app/api/v1/getBlogs')
            setBlog(data.blogs)
        } catch (error) {
            console.log('error is : ',error)
        }
    }

    async function deleteBlog(id){
        try {
            console.log('del id is : ',id)
            const {data} = await axios.delete(`https://techealerz-backend.vercel.app/api/v1/deleteBlog/${id}`)
            console.log('data is : ',data)
        } catch (error) {
            console.log('error is : ',error)
        }
    }

    useEffect(()=>{
        getAllBlogs()
    },[])

    return (
        <div className={styles.mainWindow}>
            <AdminDashboardNavbar />
            <div className={styles.mainContent}>
                <p>All Blogs</p>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blog.map(ele=><tr key={ele?._id}>
                                <td>{ele?._id}</td>
                                <td>{ele?.title}</td>
                                <td><button onClick={()=>deleteBlog(ele?._id)}>Delete</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AllBlogs