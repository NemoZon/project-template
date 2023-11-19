import { useCallback, useState } from 'react';
import { Section } from '../UI/Section';
import classes from './index.module.css';

export default function SmallSectionGray() {
  const [play, setPlay] = useState(false);
  const [turnOn, setTurnOn] = useState(false);
  const [timoutId, setTimeoutId] = useState(0);
  const handleMouseEnter = useCallback(() => {
    setTurnOn(true);
    const t = setTimeout(() => {
      setPlay(true);
    }, 550);
    setTimeoutId(t);
  }, []);

  const handleMouseLeave = useCallback(() => {
    clearTimeout(timoutId);
    setTurnOn(false);
    setPlay(false);
  }, [timoutId]);

  return (
    <Section
      className={`${classes.section_small} ${classes.section_gray}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open('https://github.com/NemoZon/todo-list', '_blank')}
    >
      <>
        <img
          className={`${classes.img} ${classes.img_play} ${play ? '' : classes.animation_stop}`}
          src='assets/img/Disk-10-Plt.png'
          alt='github'
        />
        <img
          className={`${classes.img_player} ${
            turnOn ? classes.img_player_turnOn : classes.img_player_turnOff
          }`}
          src='assets/img/Group10.png'
          alt='github'
        />
      </>
    </Section>
  );
}
