import React from 'react';

import { Title } from '../title/Title';
import './styles.scss';

export const Header = ({ titleName }) => {
  return (
    <header className="header-container">
      <div className="flag">
        <Title title={titleName} className="slide-name" />
      </div>
      <Title title="Irina Lanskaya" profession="JavaScript developer" className="title-container" />
    </header>
  );
};
