import React, { useState, useEffect } from 'react';
import { object, func, arrayOf } from 'prop-types';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { changePage } from 'services/changePage';
import { COURSES } from 'constants/pathNames';
import { Title } from '../title/Title';
import { jsSkillsArr, reactSkillsArr, htmlSkillsArr, otherSkillsArr, cssSkillsArr } from 'constants/infoArries';
import photo from 'accets/Slide1.png';
import html from 'accets/StickerHtml.png';
import react from 'accets/StickerReact.png';
import js from 'accets/StickerJs.png';
import css from 'accets/StickerCss.png';
import other from 'accets/StickerOther.png';

import './styles.scss';

const makeLayout = (arr, className) => {
  return (
    <ul className={className}>
      {arr.map((skill) => (
        <li key={skill.id}>{skill.skill}</li>
      ))}
    </ul>
  );
};
const initialJsSkillsLayout = makeLayout(jsSkillsArr, 'show-js-skill');
const initialReactSkillsLayout = makeLayout(reactSkillsArr, 'show-react-skill');
const initialHtmlSkillsLayout = makeLayout(htmlSkillsArr, 'show-html-skill');
const initialCssSkillsLayout = makeLayout(cssSkillsArr, 'show-css-skill');
const initialOtherSkillsLayout = makeLayout(otherSkillsArr, 'show-other-skill');

export const Skills = ({ match, history, getSkills, skills }) => {
  const [htmlSkill, setHtmlSkill] = useState(false);
  const [cssSkill, setCssSkill] = useState(false);
  const [jsSkill, setJsSkill] = useState(false);
  const [reactSkill, setReactSkill] = useState(false);
  const [otherSkill, setOtherSkill] = useState(false);

  const [js_skills, react_skills, html_skills, css_skills, other_skills] = skills;
  const jsSkillsLayout = js_skills ? makeLayout(js_skills.js_skills, 'show-js-skill') : null;
  const reactSkillsLayout = react_skills ? makeLayout(react_skills.react_skills, 'show-react-skill') : null;
  const htmlSkillsLayout = html_skills ? makeLayout(html_skills.html_skills, 'show-html-skill') : null;
  const cssSkillsLayout = css_skills ? makeLayout(css_skills.css_skills, 'show-css-skill') : null;
  const otherSkillsLayout = other_skills ? makeLayout(other_skills.other_skills, 'show-other-skill') : null;

  const historyPushDown = COURSES;
  const historyPushUp = '';

  let isJsSkill = null;
  let isReactSkill = null;
  let isHtmlSkill = null;
  let isCssSkill = null;
  let isOtherSkill = null;

  if (jsSkill) {
    isJsSkill = jsSkillsLayout || initialJsSkillsLayout;
  }

  if (reactSkill) {
    isReactSkill = reactSkillsLayout || initialReactSkillsLayout;
  }

  if (htmlSkill) {
    isHtmlSkill = htmlSkillsLayout || initialHtmlSkillsLayout;
  }

  if (cssSkill) {
    isCssSkill = cssSkillsLayout || initialCssSkillsLayout;
  }

  if (otherSkill) {
    isOtherSkill = otherSkillsLayout || initialOtherSkillsLayout;
  }

  const handleEvent = (e) => {
    const delta = e;

    changePage(match, history, historyPushDown, historyPushUp, delta);
  };

  const showHtmlSkill = () => {
    setHtmlSkill(!htmlSkill);
  };

  const showCssSkill = () => {
    setCssSkill(!cssSkill);
  };

  const showJsSkill = () => {
    setJsSkill(!jsSkill);
  };

  const showReactSkill = () => {
    setReactSkill(!reactSkill);
  };

  const showOtherSkill = () => {
    setOtherSkill(!otherSkill);
  };

  useEffect(() => {
    getSkills();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container" onWheel={(e) => handleEvent(e.deltaY)}>
      {!reactSkill && !isCssSkill && <Title />}
      <img className="main-picture" src={photo} alt="ira" />
      <div className="skills-container">
        <img src={html} className="html" onClick={showHtmlSkill} alt="logo" />
        <img src={react} className="react" onClick={showReactSkill} alt="logo" />
        <img src={js} className="js" onClick={showJsSkill} alt="logo" />
        <img src={css} className="css" onClick={showCssSkill} alt="logo" />
        <img src={other} className="other" onClick={showOtherSkill} alt="logo" />
      </div>
      <div className="expand-more">
        <ExpandMoreButton onClick={handleEvent} />
      </div>
      {isJsSkill}
      {isReactSkill}
      {isHtmlSkill}
      {isCssSkill}
      {isOtherSkill}
    </div>
  );
};

Skills.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  getSkills: func.isRequired,
  skills: arrayOf(object),
};
