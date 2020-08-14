import React, { useState } from 'react';
import { object, arrayOf } from 'prop-types';

import { clickToContinue } from 'services/clickToContinue';
import { COURSES } from 'constants/pathNames';
import { Header } from 'components/header/Header';
import { jsSkillsArr, reactSkillsArr, htmlSkillsArr, otherSkillsArr, cssSkillsArr } from 'constants/infoArries';
import photo from 'accets/Slide1.png';
import htmlImg from 'accets/StickerHtml.png';
import reactImg from 'accets/StickerReact.png';
import jsImg from 'accets/StickerJs.png';
import cssImg from 'accets/StickerCss.png';
import otherImg from 'accets/StickerOther.png';

import './styles.scss';

const makeLayout = (arr, className) => {
  return (
    <ul className={`list-${className}`}>
      {arr.map((skill) => (
        <li className={`list-item-${className}`} key={skill.id}>
          {skill.skill}
        </li>
      ))}
    </ul>
  );
};

const initialJsSkillsListLayout = makeLayout(jsSkillsArr, 'js-skill');
const initialReactSkillsListLayout = makeLayout(reactSkillsArr, 'react-skill');
const initialHtmlSkillsListLayout = makeLayout(htmlSkillsArr, 'html-skill');
const initialCssSkillsListLayout = makeLayout(cssSkillsArr, 'css-skill');
const initialOtherSkillsListLayout = makeLayout(otherSkillsArr, 'other-skill');

export const Skills = ({ match, history, skills }) => {
  const [isModal, setIsModal] = useState(true);
  const [htmlSkillList, setHtmlSkillList] = useState(false);
  const [cssSkillList, setCssSkillList] = useState(false);
  const [jsSkillList, setJsSkillList] = useState(false);
  const [reactSkillList, setReactSkillList] = useState(false);
  const [otherSkillList, setOtherSkillList] = useState(false);

  const [js_skills, react_skills, html_skills, css_skills, other_skills] = skills;
  const htmlSkillsListLayout = html_skills ? makeLayout(html_skills.html_skills, 'html-skill') : null;
  const cssSkillsListLayout = css_skills ? makeLayout(css_skills.css_skills, 'css-skill') : null;
  const jsSkillsListLayout = js_skills ? makeLayout(js_skills.js_skills, 'js-skill') : null;
  const reactSkillsListLayout = react_skills ? makeLayout(react_skills.react_skills, 'react-skill') : null;
  const otherSkillsListLayout = other_skills ? makeLayout(other_skills.other_skills, 'other-skill') : null;

  const historyPush = COURSES;

  let isHtmlSkillList = null;
  let isCssSkillList = null;
  let isJsSkillList = null;
  let isReactSkillList = null;
  let isOtherSkillList = null;

  if (htmlSkillList) {
    isHtmlSkillList = htmlSkillsListLayout || initialHtmlSkillsListLayout;
  }

  if (cssSkillList) {
    isCssSkillList = cssSkillsListLayout || initialCssSkillsListLayout;
  }

  if (jsSkillList) {
    isJsSkillList = jsSkillsListLayout || initialJsSkillsListLayout;
  }

  if (reactSkillList) {
    isReactSkillList = reactSkillsListLayout || initialReactSkillsListLayout;
  }

  if (otherSkillList) {
    isOtherSkillList = otherSkillsListLayout || initialOtherSkillsListLayout;
  }

  const showHtmlSkillList = () => {
    setHtmlSkillList(!htmlSkillList);
  };

  const showCssSkillList = () => {
    setCssSkillList(!cssSkillList);
  };

  const showJsSkillList = () => {
    setJsSkillList(!jsSkillList);
  };

  const showReactSkillList = () => {
    setReactSkillList(!reactSkillList);
  };

  const showOtherSkillListList = () => {
    setOtherSkillList(!otherSkillList);
  };

  const hideModal = () => {
    setIsModal(false);
  };

  return (
    <div
      className="container"
    // onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}
    >
      {!reactSkillList && !isCssSkillList && !isOtherSkillList && <Header titleName="Skills" />}
      <main>
        <div className="img-container">
          <img className="main-img" src={photo} alt="ira" />
        </div>
        <div className="skills-container">
          <img src={htmlImg} className="html-logo" onClick={showHtmlSkillList} alt="logo" />
          <img src={reactImg} className="react-logo" onClick={showReactSkillList} alt="logo" />
          <img src={jsImg} className="js-logo" onClick={showJsSkillList} alt="logo" />
          <img src={cssImg} className="css-logo" onClick={showCssSkillList} alt="logo" />
          <img src={otherImg} className="other-logo" onClick={showOtherSkillListList} alt="logo" />
        </div>
        {!isModal && (
          <button className="btn-continue" onClick={() => clickToContinue(history, historyPush)}>
            Continue
          </button>
        )}
        {isModal && (
          <div className="blurred-background">
            <div className="modal-window">
              <h2>All elements are clickable on this site.</h2>
              <button className="btn-modal-ok" onClick={hideModal}>
                Ok
              </button>
            </div>
          </div>
        )}
        {isJsSkillList}
        {isReactSkillList}
        {isHtmlSkillList}
        {isCssSkillList}
        {isOtherSkillList}
      </main>
    </div>
  );
};

Skills.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  skills: arrayOf(object),
};
