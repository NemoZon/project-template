import { useCallback, useState } from 'react';
import classes from './index.module.css';
import { Section } from '../UI/Section';

export function SmallSectionYellow() {
  const [dynamicText, setDynamicText] = useState('');
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleMouseEnter = useCallback(() => {
    let n = 0;
    const letters = ['A', 'b', 'o', 'u', 't', 'M', 'e'];
    if (!intervalId) {
      const i = setInterval(
        () => {
          setDynamicText(letters[n % letters.length]);
          n += 1;
        },
        150,
        [n],
      );
      setIntervalId(i);
    }
  }, [intervalId]);

  const handleMouseLeave = useCallback(() => {
    setDynamicText('');
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);
  return (
    <Section
      className={`${classes.section_small} ${classes.section_yellow}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open('https://bushukin.com/', '_blank')}
    >
      {dynamicText ? (
        <h1 className={classes.title}>{dynamicText}</h1>
      ) : (
        <>
          <h2 className={classes.subtitle}>About</h2>
          <h1 className={classes.title}>Me</h1>
        </>
      )}
    </Section>
  );
}
