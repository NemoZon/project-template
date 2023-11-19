import React, { useState, useEffect } from 'react';
import classes from './index.module.css';

export interface IMarqueeProps {
  text: string;
}

const Marquee: React.FC<IMarqueeProps> = ({ text }) => {
  const [scrollText, setScrollText] = useState(text);

  useEffect(() => {
    const w = window.screen.width;
    let t = '';
    while (t.length < w / 2) {
      t += text;
    }
    setScrollText(t);
  }, [text]);

  return (
    <div className={classes.Marquee}>
      <p className={classes.text}>{scrollText}</p>
    </div>
  );
};

export default Marquee;
