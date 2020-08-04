import React from 'react';
import { NavLink } from 'react-router-dom';

import { Title } from '../title/Title';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header-container">
      <Title title="Irina Lanskaya" profession="JavaScript developer" className="title-container" />
      <nav className="nav-bar">
        <NavLink to="/skills" className="link-item link-item-skills" activeClassName="active">
          Skills
        </NavLink>

        <NavLink to="/courses" className="link-item link-item-courses" activeClassName="active">
          Courses
        </NavLink>

        <NavLink to="/interests" className="link-item link-item-interests" activeClassName="active">
          Interests
        </NavLink>

        <NavLink to="/contacts" className="link-item link-item-contacts" activeClassName="active">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
