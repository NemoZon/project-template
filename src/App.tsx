import Marquee from './components/UI/Marquee';
import { Title } from './components/UI/Title';
import classes from './App.module.css';
import MainSection from './components/MainSection';
import { SmallSectionYellow } from './components/SmallSectionYellow';
import SmallSectionGray from './components/SmallSectionGray';
import { MiddleSection } from './components/MiddleSection';
import { useState } from 'react';
import { Project } from './components/Project';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Marquee text=' React Native | Gleb BUSHUKIN | Full-Stack Web Developer | ' />
      <div className='content'>
        <img
          className={classes.img}
          src='assets/img/8a1a4dda6c7f91481f4e4dd8885661e3.gif'
          alt='planet'
        />
        <Title title='To-Do List' subtitle='Mobile Application' />
        <div className={`${classes.sections} gap-2`}>
          {isClicked ? (
            <Project />
          ) : (
            <MainSection
              handleClick={() => {
                const t = setTimeout(() => {
                  setIsClicked(true);
                }, 500);
                return () => clearTimeout(t);
              }}
            />
          )}
          <div className='d-flex flex-column gap-2'>
            <div className={`gap-2 ${classes.container}`}>
              <SmallSectionYellow />
              <SmallSectionGray />
            </div>
            <MiddleSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
