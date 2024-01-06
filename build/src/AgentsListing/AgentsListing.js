import './AgentsListing.css';
import { useState, useEffect } from 'react';
import agents from '../dbAgents';

function AgentsListing(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState({ type: null, id: null });

  useEffect(() => {
    const handleScrollForVisible = () => {
      if (window.scrollY >= 3700) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScrollForVisible);
    return () => {
      window.removeEventListener('scroll', handleScrollForVisible);
    };
  }, []);

  const handleMouseEnter = (id, type) => {
    setHoveredIcon({ id, type });
  };

  const handleMouseLeave = () => {
    setHoveredIcon({ id: null, type: null });
  };

  return (
    <div className={isVisible || props.animationStatus?"agentsListing":"hidden"}
      style={{
        paddingTop:props.animationStatus ? "10%": "none",
        paddingBottom:props.animationStatus ? "5%": "none"
      }}
    >
        <div className='agentsListing-text'>
            <h3 className='agentsListing-text-h3'>
                Property Agents
            </h3>
            <p className='agentsListing-text-p'>
            Our dedicated team of professionals strives to provide exceptional service. <br/>
            With a commitment to excellence, we aim to meet your real estate needs and exceed your expectations.
            </p>
        </div>
        <div className='agentsListing-cards'>
        {agents.map((agent) => (
            <div className='agentListing-card' key={agent.index}>
                <img src={agent.imageURL}></img>
                <div className='agentListing-card-info'>
                    <p className='agentListing-card-info-name'>{agent.name}</p>
                    <p className='agentListing-card-info-designation'>{agent.designation}</p>
                </div>
                <div className='agentListing-icons'>
                    <img
                        className='icon'
                        src={`./imgs/instagram${hoveredIcon.type === 'instagram' && hoveredIcon.id === agent.index ? 'W' : 'G'}.png`}
                        onMouseEnter={() => handleMouseEnter(agent.index, 'instagram')}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=> window.open("https://instagram.com", "_blank")}

                    />
                    <img
                        className='icon'
                        src={`./imgs/facebook${hoveredIcon.type === 'facebook' && hoveredIcon.id === agent.index ? 'W' : 'G'}.png`}
                        onMouseEnter={() => handleMouseEnter(agent.index, 'facebook')}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=> window.open("https://facebook.com", "_blank")}
                    />
                    <img
                        className='icon'
                        src={`./imgs/twitter${hoveredIcon.type === 'twitter' && hoveredIcon.id === agent.index ? 'W' : 'G'}.png`}
                        onMouseEnter={() => handleMouseEnter(agent.index, 'twitter')}
                        onMouseLeave={handleMouseLeave}
                        onClick={()=> window.open("https://twitter.com", "_blank")}
                    />
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default AgentsListing;
