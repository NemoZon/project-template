import { useState } from 'react';
import { Section } from '../UI/Section';
import classes from './index.module.css';

export interface IMainSectionProps {
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function MainSection({ handleClick = () => {} }: IMainSectionProps) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Section
      className={`${classes.section_main} ${isClicked ? classes.section_main_color : ''}`}
      onClick={(e) => {
        setIsClicked(true);
        handleClick(e);
      }}
    >
      <>
        <img
          className={classes.section_main_content_img}
          src='assets/img/Vector.png'
          alt='vector'
        />
        <p className={classes.section_main_content_text}>View Project</p>
      </>
    </Section>
  );
}
