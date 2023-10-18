import { useEffect, useRef } from 'react';

const AnimationHackEffect = ({ targetElementId, dataValue, isAnimating, setIsAnimating }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const interval = useRef(null);
  const iteration = useRef(0);

  useEffect(() => {
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
      console.error(`Element with ID ${targetElementId} not found`);
      return;
    }
    if (isAnimating) {
      interval.current = setInterval(() => {
        targetElement.innerText = targetElement.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration.current) {
              return dataValue[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration.current >= dataValue.length) {
          clearInterval(interval.current);
          iteration.current = 0;
          setIsAnimating(false);
        }

        iteration.current += 1 / 3;
      }, 30);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [targetElementId, dataValue, isAnimating, setIsAnimating]);

  return null;
};

export default AnimationHackEffect;