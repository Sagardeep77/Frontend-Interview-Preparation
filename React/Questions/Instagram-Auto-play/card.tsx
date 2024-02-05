import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
const Card = (props:any) => {
  const { src } = props;
  const seperator = useRef(null);

  useEffect(() => {
    if (seperator) {
      const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8,
      });
      const ele = seperator.current as unknown as HTMLVideoElement
      observer.observe(ele);

      return () => {
        observer.unobserve(seperator as unknown as Element);
      };
    }
  }, [seperator]);

  const callback = function (entries: any) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target.play();
      } else {
        entry.target.pause();
      }
    }
  };

  return (
    <div className="reel-card">
      <video width="250" ref={seperator}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Card;
