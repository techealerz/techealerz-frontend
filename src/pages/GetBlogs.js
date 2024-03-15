import axios from "axios"
import { useEffect, useState } from "react"
import styles from './styles/getblogs.module.scss'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const ashwaniBlog = [
    {
        title: '12. Client Showcase - Success Stories:',
        content: `Explore real-world success stories from businesses that have partnered 
        with Techealerz. Learn how our innovative PLM solutions have overcome 
        challenges, optimized processes, and contributed to their growth.`
    }, {
        title: '13. Expert Q&A - Your PLM Questions Answered:',
        content: `Have burning questions about PLM and related technologies? Our experts 
        are here to provide answers. Reply to this email with your questions, and 
        we'll feature them in our next Q&A segment.`
    }, {
        title: '14. Behind the Scenes - Techealerz in Action:',
        content: `Take a closer look at our PLM implementation projects, data migrations, 
        and integrations. Get a glimpse into the hands-on approach we take 
        to deliver remarkable results for our clients.`
    }, {
        title: '15. Webinar Recap - Learn and Engage:',
        content: `If you missed our recent webinar, catch up on the highlights and key 
        takeaways. Stay tuned for announcements of upcoming webinars where 
        we delve into the complexities of PLM and share valuable insights.`
    }, {
        title: '16. Tech Tips - Maximizing Your PLM System:',
        content: `Explore our tech tips section, where we share practical advice on 
        maximizing the efficiency of your PLM system. Learn about the latest 
        tools, updates, and best practices in the PLM domain.`
    }, {
        title: '17. Community Engagement - Techealerz in Your Area:',
        content: `Find out about local events, community engagements, and initiatives 
        Techealerz is a part of. We believe in fostering connections beyond 
        business, contributing to the communities we serve.`
    }
]

function GetBlogs() {

    const [blog, setBlog] = useState([])

    async function getAllBlogs() {
        try {
            const { data } = await axios.get('https://techealerz-backend.vercel.app/api/v1/getBlogs')
            setBlog(data.blogs[0])
        } catch (error) {
            console.log('error is : ', error)
        }
    }

    console.log('blog is : ', blog)

    useEffect(() => {
        window.scrollTo(0,0)
        getAllBlogs()
    }, [])

    return (
        <div className={styles.mainWindow}>
            <Navbar />
            <div className={styles.mainContent}>
                {/* <div className={styles.cards}>
                    <div className={styles.card}>

                    </div>
                </div> */}
                <div className={styles.firstBlog}>
                    <span className={styles.blogsHeading}>About Our Website</span>
                    <p className={styles.blogPara}>1. Elevate Your Business with Efficient PLM Solutions from Techealerz
                        Solution.
                    </p>
                    <p className={styles.blogsList}>2. Why PLM Matters to Your Business:
                    </p>
                    <p className={styles.blogPara}>
                        In today's dynamic business landscape, the adoption of PLM and related
                        technologies is critical for ensuring the seamless management of core
                        business data and processes.
                    </p>
                    <p className={styles.blogPara}>
                        3. Techealerz can help you navigate the complexities of PLM with the
                        following considerations:
                    </p>
                    {/* sub secction */}
                    <div style={{ paddingLeft: '1.2rem' }}>
                        <p className={styles.blogsList}>
                            3.1 Seamless Integration with Enterprise Applications:
                        </p>
                        <p className={styles.blogPara}>
                            Do you believe it's important to seamlessly connect PLM applications with
                            enterprise applications like ERP, CRM, and more? Techealerz ensures a
                            smooth integration process, enhancing the interoperability of your
                            business systems.

                        </p>
                        <p className={styles.blogsList}>
                            3.2 Holistic Integration with Design Tools and Office Applications:
                        </p>
                        <p className={styles.blogPara}>
                            Do you believe integrating PLM with MCAD, ECAD, and MS Office tools can
                            help your business? Techealerz specializes in comprehensive integration,
                            empowering your teams to collaborate efficiently and ensuring that
                            design and office tools work seamlessly with your PLM system.
                        </p>
                        <p className={styles.blogsList}>
                            3.3 Transforming Dissatisfaction into Success:
                        </p>
                        <p className={styles.blogPara}>
                            Is your organization not happy with the current PLM tool, and you don't
                            know how you can make a difference? Techealerz can help you assess your
                            current PLM setup, understand pain points, and propose effective
                            solutions to transform dissatisfaction into success.
                        </p>
                        <p className={styles.blogsList}>
                            3.4 Overcoming Project Challenges:
                        </p>
                        <p className={styles.blogPara}>
                            Are your PLM projects stuck, and you are frustrated because of higher
                            costs and long project timelines? Techealerz excels in overcoming project
                            challenges, ensuring timely delivery, and optimizing costs for a successful
                            PLM implementation.
                        </p>
                    </div>
                    <p className={styles.blogsList}>
                        4. Partner with Techealerz for PLM Excellence:
                    </p>
                    <p className={styles.blogPara}>
                        At Techealerz, we understand the significance of PLM in driving business
                        success. Our tailored solutions are designed to meet your unique needs,
                        providing a roadmap for enhanced efficiency, collaboration, and value
                        creation
                    </p>
                    <p className={styles.blogsList}>
                        5. Our Comprehensive PLM Services:
                    </p>
                    <p className={styles.blogPara}>
                        Discover how our services, including PLM implementation, data migration,
                        integrations, and cloud-based deployments, can elevate your business
                        efficiency.
                    </p>
                    <p className={styles.blogsList}>
                        6. Client Success Stories:
                    </p>
                    <p className={styles.blogPara}>
                        Read about how Techealerz has successfully partnered with businesses
                        like yours, overcoming challenges, and achieving PLM excellence.
                    </p>
                    <p className={styles.blogsList}>
                        7. Unlocking Innovation - Our Approach:
                    </p>
                    <p className={styles.blogPara}>
                        Gain insights into our innovative approach to PLM solutions, ensuring that
                        your business stays ahead in a rapidly evolving market.
                    </p>
                    <p className={styles.blogsList}>
                        8. Ask the Experts:
                    </p>
                    <p className={styles.blogPara}>
                        Do you have questions about PLM or related technologies? Our experts
                        are here to provide answers and guidance. Reply to this email or schedule
                        a consultation.
                    </p>
                    <p className={styles.blogsList}>
                        9. A Message from Techealerz Leadership:
                    </p>
                    <p className={styles.blogPara}>
                        Learn about our journey, commitment to excellence, and how our team is
                        dedicated to customer satisfaction.
                    </p>
                    <p className={styles.blogsList}>
                        10. Spotlight on Our Team:
                    </p>
                    <p className={styles.blogPara}>
                        Get to know the experts behind Techealerz and how our passionate
                        professionals drive success for our clients. Meet the faces dedicated to
                        streamlining processes and building efficient PLM systems.
                    </p>
                    <p className={styles.blogsList}>
                        11. Industry Trends and Insights:
                    </p>
                    <p className={styles.blogPara}>
                        Stay ahead of the curve with our analysis of the latest trends in PLM and
                        related technologies. Gain insights into how these trends can impact your
                        business and how Techealerz is positioned to guide you through the
                        evolving landscape.
                    </p>
                    {
                        ashwaniBlog.map(ele => <div>
                            <p className={styles.blogsList}>{ele?.title}</p>
                            <p className={styles.blogPara}>{ele?.content}</p>
                        </div>)
                    }
                    <span style={{ fontWeight: '300', fontStyle: 'italic', fontSize: '.9rem', display: 'block', textAlign: 'right' }}>By - Ashwani Gupta</span>
                </div>

                <div style={{ margin: '2rem 0' }}>

                </div>
                <div className={styles.firstBlog}>
                    <span className={styles.blogsHeading}>What Is PLM</span>
                    <p className={styles.blogPara}>In the fast-paced world of technology, acronyms and technical jargon can sometimes feel like a
                        language of their own. One such term you might have come across is "PLM," which stands for
                        Product Lifecycle Management. But what exactly does it mean, and why is it essential?
                    </p>
                    <span className={styles.blogsSubHeading}>Let’s start with the Basics:</span>
                    <p className={styles.blogPara}>At its core, Product Lifecycle Management (PLM) is like a conductor orchestrating a symphony of
                        tasks and information throughout the lifespan of a product. Think of it as the central nervous system
                        of product development and management.</p>
                    <span className={styles.blogsSubHeading}>In Layman's Terms:</span>
                    <p className={styles.blogPara}> Imagine you're baking a cake. PLM is your recipe book, ensuring everyone involved - from the chef to
                        the suppliers providing ingredients - is on the same page. It covers everything from the initial idea
                        (the recipe) to the final product on the shelf.</p>
                    <span className={styles.blogsSubHeading}>Breaking Down the Journey</span>
                    <span className={styles.blogsList}>1. Conception:</span>
                    <p>Just like every cake begins with a recipe, every product starts with an idea. PLM helps in organizing
                        and managing these initial concepts, making sure they align with market needs.</p>
                    <span className={styles.blogsList}>2. Design and Development:
                    </span>
                    <p>
                        Once the idea is solidified, the actual creation begins. PLM facilitates collaboration among designers,
                        engineers, and everyone else involved. It's like having a shared canvas where each stroke contributes
                        to the masterpiece.
                    </p>
                    <span className={styles.blogsList}>3. Testing and Refinement:</span>
                    <p>
                        Imagine taste-testing your cake at various stages - PLM ensures that each iteration of the product is
                        tested, refined, and improved. This step is crucial to make sure the final result meets or exceeds
                        expectations.
                    </p>
                    <span className={styles.blogsList}>4. Production:</span>
                    <p>
                        As your cake goes into the oven, the product goes into production. PLM ensures that everyone in the
                        production line has access to the right information, reducing errors and ensuring consistency.
                    </p>
                    <span className={styles.blogsList}>5. Launch and Distribution:</span>
                    <p>
                        It's time to present your cake to the world. PLM helps manage the launch and distribution of the
                        product, ensuring it reaches the right markets at the right time.
                    </p>
                    <span className={styles.blogsList}>6. Maintenance and Updates:</span>
                    <p>
                        Just as a successful cake recipe might need occasional tweaks, products may need updates. PLM
                        helps in managing these changes efficiently
                    </p>
                    <span className={styles.blogsSubHeading}>The Multilingual Advantage</span>
                    <p className={styles.blogPara}>
                        One of PLM's remarkable features is its ability to break down language barriers. It acts as a universal
                        translator, allowing teams from diverse backgrounds and languages to work seamlessly. Just as a
                        recipe can be understood by chefs worldwide, PLM ensures that product information is universally
                        accessible.
                    </p>
                    <span className={styles.blogsSubHeading}>Why Does PLM Matter?</span>
                    <span className={styles.blogsList}>Efficiency and Collaboration:</span>
                    <p className={styles.blogPara}>
                        PLM streamlines processes, minimizing delays, and ensuring that everyone involved is on the same
                        page. It promotes collaboration, breaking down silos between departments and fostering a more
                        cohesive team.
                    </p>
                    <span className={styles.blogsList}>Reduced Errors:</span>
                    <p className={styles.blogPara}>
                        By centralizing information and automating workflows, PLM reduces the chances of errors during
                        product development and manufacturing. It's like having a vigilant assistant double-checking every
                        step of the process.
                    </p>
                    <span className={styles.blogsList}>Adaptability:</span>
                    <p className={styles.blogPara}>
                        In today's dynamic market, the ability to adapt quickly is crucial. PLM provides the agility needed to
                        respond to changes in customer preferences, technology, or market trends.
                    </p>
                    <span className={styles.blogsSubHeading}>In Conclusion</span>
                    <p className={styles.blogPara}>
                        In essence, Product Lifecycle Management is the guiding force that transforms ideas into tangible
                        products. It's the recipe, the shared kitchen, and the taste-tester all rolled into one. So, the next time
                        you hear about PLM, think of it as the secret ingredient that ensures your products are not just made
                        but made right.
                        Remember, PLM isn't just a set of tools; it's a philosophy that champions collaboration, efficiency,
                        and innovation. It's the universal language that speaks the dialect of successful product
                        development
                    </p>
                    <span style={{ fontWeight: '300', fontStyle: 'italic', fontSize: '.9rem', display: 'block', textAlign: 'right' }}>By - Garvit Raheja</span>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}


export default GetBlogs