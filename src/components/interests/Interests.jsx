import React from 'react';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { Header } from 'components/header/Header';
import { handleEvent } from 'services/handleEvent';
import { CONTACTS, COURSES } from 'constants/pathNames';
import photo from 'accets/Slide3.0.png';
import photo2 from 'accets/Slide3.2.png';
import jacketImg from 'accets/JacketFirst.png';
import dogImg from 'accets/SemenFirst.png';
import dogGif from 'accets/SemenGif.gif';
import './styles.scss';

export const Interests = ({ match, history }) => {
  const historyPushDown = CONTACTS;
  const historyPushUp = COURSES;

  return (
    <div className="container" onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}>
      <Header />
      <main>
        <section className="third-slide-first-picture img-container">
          <img className="main-img" src={photo} alt="ira" />
          <div className="dog-img-container">
            <img className="dog-img" src={dogImg} alt="dog" />
          </div>
          <div className="jacket-img-container">
            <img className="jacket-img" src={jacketImg} alt="jacket" />
          </div>
        </section>
        <section className="third-slide-second-picture img-container">
          <img className="main-img" src={photo2} alt="ira" />
          <div className="gif-container">
            <img className="gif-dog" src={dogGif} alt="dog" />
          </div>
        </section>
        <div className="btn-expand-less">
          <ExpandLessButton onClick={() => handleEvent(0, match, history, historyPushDown, historyPushUp)} />
        </div>
        <div className="btn-expand-more">
          <ExpandMoreButton onClick={() => handleEvent(1.1, match, history, historyPushDown, historyPushUp)} />
        </div>
      </main>
    </div>
  );
};
