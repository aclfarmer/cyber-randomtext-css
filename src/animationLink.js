import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimationHackEffect from './animationHack.js';

const AnimationLink = ({targetId, to, dataValue, icon, onMouseEnter, onMouseLeave, isExternal  }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsAnimating(true);
        if (onMouseEnter) {
          onMouseEnter();
        }
    };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    if (isExternal) {
        //external links
        return (
            <div className={targetId}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            {icon && (
                <a
                    href={to} //href for external 
                >
                    <i className={icon}></i>&nbsp;
                </a>
            )}
                <a
                    id={targetId}
                    href={to} //href for external 
                    className='papercactus__socials-social_icon'
                >
                    {dataValue}
                    <AnimationHackEffect
                        targetElementId={targetId}
                        dataValue={dataValue}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                    />
                </a>
            </div>

            );
        }
        //internal links
        return (
            <div className={targetId}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {icon && (
                    <Link
                        to={to}
                    >
                        <i className={icon}></i>&nbsp;
                    </Link>
                )}
                <Link
                    id= {targetId}
                    data-value={dataValue}
                    className='papercactus__socials-social_icon'
                    to={to}
                >
                    {dataValue}
                    <AnimationHackEffect
                        targetElementId={targetId}
                        dataValue={dataValue}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                    />
                </Link>
            </div>
        );
};

export default AnimationLink;