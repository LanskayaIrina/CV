import React from 'react';

import { Header } from 'components/header/Header';
import { clickToContinue } from 'services/clickToContinue';
import { CONTACTS } from 'constants/pathNames';
import photo from 'accets/Slide3.0.png';
import photo2 from 'accets/Slide3.2.png';
import jacketImg from 'accets/JacketFirst.png';
import dogImg from 'accets/SemenFirst.png';
import dogGif from 'accets/SemenGif.gif';
import './styles.scss';

export const Interests = ({ match, history }) => {
  const historyPush = CONTACTS;

  return (
    <div className="container">
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
        <button className="btn-continue" onClick={() => clickToContinue(history, historyPush)}>
          Continue
        </button>
      </main>
    </div>
  );
};
