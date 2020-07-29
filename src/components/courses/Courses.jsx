import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud';
import { object, func, arrayOf } from 'prop-types';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { Header } from '../header/Header';
import { handleEvent } from 'services/handleEvent';
import { INTERESTS, SKILLS } from 'constants/pathNames';
import { initialCourses } from 'constants/infoArries';
import photo from 'accets/Slide2.0.png';
import photo2 from 'accets/Slide2.1.png';
import cup from 'accets/Cup.png';
import book from 'accets/Boock.png';
import pen from 'accets/Pen.png';
import './styles.scss';

const data = [
  { value: 'jQuery', count: 9 },
  { value: 'SCSS', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Koa', count: 15 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 27 },
  { value: 'Webpack', count: 20 },
  { value: 'Babel.js', count: 12 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Photoshop', count: 27 },
  { value: 'React Native', count: 17 },
  { value: 'Gulp', count: 30 },
  { value: 'Redux', count: 25 },
  { value: 'Js', count: 30 },
  { value: 'NPM', count: 16 },
  { value: 'Babel', count: 12 },
  { value: 'ES-6', count: 25 },
  { value: 'OOP', count: 15 },
  { value: 'HOOKS', count: 27 },
  { value: 'ReactJS', count: 17 },
  { value: 'Gulp4', count: 30 },
];

const makeCoursesLayout = (arr) => {

  if (arr.length === 0) {
    return null;
  } else {
    return arr.map((course) => <li key={course.id}>{course.title}</li>);
  }
};

const initialCoursesLayout = makeCoursesLayout(initialCourses);

export const Courses = ({ match, history, courses, getCourses }) => {
  const [isCourses, setIsCourses] = useState(false);
  const [isTagCloud, setIsTagCloud] = useState(false);
  const historyPushDown = INTERESTS;
  const historyPushUp = SKILLS;
  let coursesLayout = makeCoursesLayout(courses);
  const showCourses = () => {
    setIsCourses(!isCourses);
  };

  useEffect(() => {
    getCourses();

    setTimeout(() => {
      setIsTagCloud(true);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: `blinker 3s linear infinite`,
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: `${color}`,
      }}
    >
      {tag.value}
    </span>
  );

  return (
    <>
      <div className="container" onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}>
        <Header titleName="Courses" />
        <div className="second-slide-first-picture">
          <img className="main-picture" src={photo} alt="ira" />
          <div className="cup-container">
            <img className="cup" src={cup} alt="cup" />
          </div>
          <div className="book-container">
            <img className="book" src={book} alt="book" />
          </div>
          <div className="pen-container">
            <img className="pen" src={pen} alt="pen" />
          </div>
        </div>
        <div className="second-slide-second-picture">
          <img className="main-picture" src={photo2} alt="ira" />
        </div>
        <div className="tag-click" onClick={() => showCourses()} />
        {isTagCloud && (
          <div className="tag-container">
            <TagCloud className="tag" tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
          </div>
        )}
        <div className="expand-less">
          <ExpandLessButton onClick={() => handleEvent(0, match, history, historyPushDown, historyPushUp)} />
        </div>
        <div className="expand-more">
          <ExpandMoreButton onClick={() => handleEvent(1.1, match, history, historyPushDown, historyPushUp)} />
        </div>
        {isCourses && <ul className="courses">{coursesLayout || initialCoursesLayout}</ul>}
      </div>
    </>
  );
};

Courses.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  courses: arrayOf(object),
  getCourses: func.isRequired,
};
