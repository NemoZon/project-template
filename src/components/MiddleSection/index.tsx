import { useCallback, useState } from 'react';
import { Section } from '../UI/Section';
import classes from './index.module.css';

export function MiddleSection() {
  const [text, setText] = useState('');
  const [intervalId, setIntervalId] = useState(0);

  const handleMouseEnter = useCallback(() => {
    let n = text.length;
    const letters = "For this block, I couldn't come up with any animation :)";
    if (!intervalId) {
      const i = setInterval(
        () => {
          if (n <= letters.length) {
            setText(letters.slice(0, n));
            n += 1;
          } else {
            clearTimeout(i);
          }
        },
        50,
        [n],
      );
      setIntervalId(i);
    }
  }, [intervalId, text.length]);

  const handleMouseLeave = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
    }
  }, [intervalId]);
  return (
    <Section
      className={`${classes.section_middle} ${classes.section_blue}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <>
        <p className={classes.text}>
          This project is my first React Native mobile application developed as part of a test
          assignment for an internship. The application is a Todo list where tasks can be added,
          deleted, and sorted. It utilizes local storage on the phone, allowing users to retain
          their data within the device even after app reloads.
        </p>
        <small className={classes.small}>{text}</small>
      </>
    </Section>
  );
}
