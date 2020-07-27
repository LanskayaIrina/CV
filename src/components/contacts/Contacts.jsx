import React from 'react';

import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { changePage } from 'services/changePage';
import { INTERESTS } from 'constants/pathNames';
import photo from 'accets/4.JPG';
import './styles.scss';

export const Contacts = ({ match, history }) => {
  const historyPushDown = '';
  const historyPushUp = INTERESTS;

  const handleEvent = (e) => {
    const delta = e;

    changePage(match, history, historyPushDown, historyPushUp, delta);
  };

  return (
    <div className="container" onWheel={(e) => handleEvent(e.deltaY)}>
      <img className="main-picture" src={photo} alt="ira" />
      <ul className="contacts">
        <li>
          <span className="contact-title">phone</span>(066) 037-67-66
        </li>
        <li>
          <span className="contact-title">Email</span>0376766@gmail.com
        </li>
        <li>
          <span className="contact-title">Git</span>
          <a href="https://github.com/LanskayaIrina">https://github.com/LanskayaIrina</a>
        </li>
      </ul>
      <div className="expand-less">
        <ExpandLessButton onClick={handleEvent} />
      </div>
    </div>
  );
};
