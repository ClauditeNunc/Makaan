import './AgentPromo.css';
import { useState, useEffect } from 'react';

function AgentPromo(props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScrollForVisible = () => {
            if (window.scrollY >= 3300) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScrollForVisible);
        return () => {
            window.removeEventListener('scroll', handleScrollForVisible);
        };
    }, []);

    return (
        <div style={{
            paddingTop:props.animationStatus?"12%":"none",
        }}>
            <div className={isVisible || props.animationStatus ? "agentPromo-outline" : "hidden"}>
                <div className='agentPromo'>
                    <img className='agentPromo-portrait' src='./imgs/call-to-action.jpg' alt='Agent Portrait' />
                    <div className='agentPromo-text'>
                        <h3 className='agentPromo-text-title'>
                            Contact With Our Certified Agent
                        </h3>
                        <p className='agentPromo-text-subText'>
                            Experience personalized service and expert guidance. Connect with our professional team for a seamless real estate journey.
                        </p>
                        <div className='agentPromo-buttons'>
                            <button className='agentPromo-button'>
                                <img className='agentPromo-button-image' src='./imgs/telephone.png' alt='Make A Call' />
                                Make A Call
                            </button>
                            <button className='agentPromo-button'>
                                <img className='agentPromo-button-image' src='./imgs/calendarwhite.png' alt='Get Appointment' />
                                Get Appointment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentPromo;
