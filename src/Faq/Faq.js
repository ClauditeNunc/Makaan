import { Link } from 'react-router-dom'
import './Faq.css'

function Faq() {
    return (
        <div className='faq'>
            <h1 className='faq-title'>Frequently Asked Questions</h1>
            <div className='faq-category'>
                <h2 className='faq-category-name'>General Questions</h2>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: What sets your real estate agency apart from others?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: At Makaan, we pride ourselves on our commitment to personalized service,
                        in-depth market knowledge, and a transparent approach to real estate. Our
                        team of experts is dedicated to making your property journey a seamless and enjoyable experience.
                    </p>
                </div>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: How can I contact your customer support team?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: For any inquiries or assistance, you can reach our customer support
                        team through our helpline at +48572776624 or submit a support ticket <a href='/faq' onClick={()=>window.open("https://www.linkedin.com/in/kbln27/?originalSubdomain=pl","_blank")} className='faq-l'>here</a>.
                        We're here to help and ensure your questions are promptly addressed.
                    </p>
                </div>
            </div>
            <div className='faq-category'>
                <h2 className='faq-category-name'>Buying and Selling</h2>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: What steps are involved in the home-buying process?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: Navigate through our detailed guide on the
                        home-buying process to understand each step involved.
                        From property search to closing the deal, we've got you covered. Check out the guide <a href='/faq' onClick={()=>window.open("https://www.linkedin.com/in/kbln27/?originalSubdomain=pl","_blank")} className='faq-l'>here</a>.
                    </p>
                </div>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: How do I list my property with Makaan?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: Listing your property with us is easy!
                        Visit our "Add Property" page for a step-by-step guide on how to list your property.
                        Click <Link to='/add-property' className='faq-l'>here</Link> to start the process.
                    </p>
                </div>
            </div>
            <div className='faq-category'>
                <h2 className='faq-category-name'>Website and Technical Support</h2>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: Who developed your website?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: Our website was expertly crafted by Faik Mammadov, a skilled web developer
                        with a passion for creating perfect and user-friendly online experiences.
                        Learn more about Faik's web development services <a href='/faq' onClick={()=>window.open("https://www.linkedin.com/in/kbln27/?originalSubdomain=pl","_blank")} className='faq-l'>here</a>.
                    </p>
                </div>
                <div className='faq-category-part'>
                    <p className='faq-category-part-question'>
                        Q: I'm having trouble navigating the website. Can you help?
                    </p>
                    <p className='faq-category-part-answer'>
                        A: Certainly! Most of the navigation is done through the navigation menu on the top and the bottom of the home page.
                    </p>
                </div>
            </div>
            <div className='faq-category'>
                <h3 className='faq-category-name'>Self-Promotion</h3>
                <p style={{color:"#0e2e50"}}>
                    We hope these FAQs provide valuable insights into your real estate journey.
                    If you have further questions or need personalized assistance,
                    don't hesitate to reach out. And if you're in need of top-notch web development services,
                    consider Faik Mammadov for an excellent online presence. Visit <a href='/faq' onClick={()=>window.open("https://www.linkedin.com/in/kbln27/?originalSubdomain=pl","_blank")} className='faq-l'>Faik's portfolio</a> to explore his expertise in web development.
                </p>
            </div>
            <h5 className='faq-subTitle'>Thank you for choosing Makaan—where expertise meets excellence in real estate!</h5>
        </div>
    )
}

export default Faq
