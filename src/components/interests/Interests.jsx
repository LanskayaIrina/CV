import React from 'react';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { Header } from '../header/Header';
import { handleEvent } from 'services/handleEvent';
import { CONTACTS, COURSES } from 'constants/pathNames';
import photo from 'accets/Slide3.0.png';
import photo2 from 'accets/Slide3.2.png';
import jacket from 'accets/JacketFirst.png';
import dog from 'accets/SemenFirst.png';
import dogGif from 'accets/SemenGif.gif';
import './styles.scss';

export const Interests = ({ match, history }) => {
  const historyPushDown = CONTACTS;
  const historyPushUp = COURSES;

  return (
    <>
      <div className="container" onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}>
        <Header titleName="Interests" />
        <div className="third-slide-first-picture">
          <img className="main-picture" src={photo} alt="ira" />
          <div className="dog-container">
            <img className="dog" src={dog} alt="dog" />
          </div>
          <div className="jacket-container">
            <img className="jacket" src={jacket} alt="jacket" />
          </div>
        </div>
        <div className="third-slide-second-picture">
          <img className="main-picture" src={photo2} alt="ira" />
          <div className="gif-container">
            <img className="gif-dog" src={dogGif} alt="dog" />
          </div>
        </div>
        <div className="expand-less">
          <ExpandLessButton onClick={() => handleEvent(0, match, history, historyPushDown, historyPushUp)} />
        </div>
        <div className="expand-more">
          <ExpandMoreButton onClick={() => handleEvent(1.1, match, history, historyPushDown, historyPushUp)} />
        </div>
      </div>
    </>
  );
};
