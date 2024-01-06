import './Help.css'
import { Link } from 'react-router-dom'

function Help(){
    return(
        <div className='help'>
            <h1 className='help-title'>Welcome to our Help Center</h1>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Buying or Selling Property
                </h2>
                <p className='help-infoPart-subText'>
                If you are looking to buy or sell a property,
                our expert team is here to guide you every step of the way.
                Explore our comprehensive guides on the buying and selling process,
                get insights into market trends, and find useful tips to make informed decisions.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Property Listings
                </h2>
                <p className='help-infoPart-subText'>
                Navigating through our extensive property 
                listings is a breeze. Learn how to filter and search for
                the perfect home or investment opportunity. Discover the
                key features of each listing and understand the details
                provided to make your property search efficient and effective.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Financing Your Property  
                </h2>
                <p className='help-infoPart-subText'>
                Understanding the financial aspect of real estate is crucial.
                Our Help Center offers resources on mortgage options, financing
                tips, and budgeting advice. Get answers to common <Link className='faq-link' to='/faq'>questions</Link> about
                home loans and explore financing solutions tailored to your needs.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Legal and Documentation
                </h2>
                <p className='help-infoPart-subText'>
                The world of real estate involves paperwork and legalities.
                Our guides break down the essential documents, contracts,
                and legal processes involved in buying or selling a property.
                Stay informed and ensure a smooth transaction with our expert advice.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>    
                Customer Support
                </h2>
                <p className='help-infoPart-subText'>
                Our dedicated customer support team is available to assist you.
                If you have specific questions or need personalized assistance,
                please don't hesitate to reach out. Contact us through our
                helpline or submit a support ticket, and we'll get back to you promptly.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Frequently Asked Questions
                </h2>
                <p className='help-infoPart-subText'>
                Explore our collection of frequently asked
                questions to find quick answers to common queries.
                From property inspections to closing costs, we've
                got your most pressing questions covered in our <Link className='faq-link' to='/faq'>FAQ</Link> section.
                </p>
            </div>
            <div className='help-infoPart'>
                <h2 className='help-infoPart-subTitle'>
                Real Estate Glossary 
                </h2>
                <p className='help-infoPart-subText'>
                New to the real estate terminology?
                Our glossary provides clear definitions of
                industry-specific terms. Enhance your understanding of
                real estate jargon to make well-informed decisions throughout your property journey.
                </p>
            </div>
            <Link to="/" className='help-welcome'>Welcome to a seamless real estate experience!</Link>
        </div>
    )
}

export default Help