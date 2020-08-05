import React from 'react';
import { NavLink } from 'react-router-dom';

import { SKILLS, COURSES, INTERESTS, CONTACTS } from 'constants/pathNames';
import { Title } from '../title/Title';
import './styles.scss';

export const Header = () => {
  return (
    <header className="header-container">
      <Title title="Irina Lanskaya" profession="JavaScript developer" className="title-container" />
      <nav className="nav-bar">
        <NavLink to={SKILLS} className="link-item link-item-skills" activeClassName="active">
          Skills
        </NavLink>

        <NavLink to={COURSES} className="link-item link-item-courses" activeClassName="active">
          Courses
        </NavLink>

        <NavLink to={INTERESTS} className="link-item link-item-interests" activeClassName="active">
          Interests
        </NavLink>

        <NavLink to={CONTACTS} className="link-item link-item-contacts" activeClassName="active">
          Contacts
        </NavLink>
      </nav>
    </header>
  );
};
