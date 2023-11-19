import { useState } from 'react';
import classes from './index.module.css';
export function Project() {
  const [activeButton, setActiveButton] = useState('Add');
  return (
    <div className={`gap-3 ${classes.container}`}>
      {activeButton === 'Add' ? (
        <video width='300' autoPlay muted loop>
          <source src={`assets/videos/Add.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        ''
      )}
      {activeButton === 'Delete' ? (
        <video width='300' autoPlay muted loop>
          <source src={`/assets/videos/Delete.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        ''
      )}
      {activeButton === 'Sort' ? (
        <video width='300' autoPlay muted loop>
          <source src={`/assets/videos/Sort.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        ''
      )}
      {activeButton === 'Storage' ? (
        <video width='300' autoPlay muted loop>
          <source src={`/assets/videos/Storage.mp4`} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ) : (
        ''
      )}
      <div className={`${classes.btn_container}`}>
        <button
          className={`btn d-flex flex-column align-items-center justify-content-center ${
            classes.btn
          } ${activeButton === 'Add' ? '' : classes.btn_disabled}`}
          onClick={() => setActiveButton('Add')}
        >
          <span className={classes.name}>Add</span>
          <div className={classes.circle} />
        </button>
        <button
          className={`btn d-flex flex-column align-items-center justify-content-center ${
            classes.btn
          } ${activeButton === 'Delete' ? '' : classes.btn_disabled}`}
          onClick={() => setActiveButton('Delete')}
        >
          <span className={classes.name}>Delete</span>
          <div className={classes.circle} />
        </button>
        <button
          className={`btn d-flex flex-column align-items-center justify-content-center ${
            classes.btn
          } ${activeButton === 'Sort' ? '' : classes.btn_disabled}`}
          onClick={() => setActiveButton('Sort')}
        >
          <span className={classes.name}>Sort</span>
          <div className={classes.circle} />
        </button>
        <button
          className={`btn d-flex flex-column align-items-center justify-content-center ${
            classes.btn
          } ${activeButton === 'Storage' ? '' : classes.btn_disabled}`}
          onClick={() => setActiveButton('Storage')}
        >
          <span className={classes.name}>Storage</span>
          <div className={classes.circle} />
        </button>
      </div>
    </div>
  );
}
