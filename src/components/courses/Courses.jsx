import React, { useState, useEffect } from 'react';
import { TagCloud } from 'react-tagcloud';
import { object, func, arrayOf } from 'prop-types';

import { ExpandMoreButton } from 'components/_shared/ExpandButton';
import { ExpandLessButton } from 'components/_shared/ExpandButton';
import { Header } from 'components/header/Header';
import { handleEvent } from 'services/handleEvent';
import { INTERESTS, SKILLS } from 'constants/pathNames';
import { initialCoursesList } from 'constants/infoArries';
import photo from 'accets/Slide2.0.png';
import photo2 from 'accets/Slide2.1.png';
import cupImg from 'accets/Cup.png';
import bookImg from 'accets/Boock.png';
import penImg from 'accets/Pen.png';
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
  { value: 'REACT', count: 30 },
  { value: 'Photoshop', count: 27 },
  { value: 'React Native', count: 17 },
  { value: 'Gulp', count: 30 },
  { value: 'Redux', count: 25 },
  { value: 'Js', count: 30 },
  { value: 'NPM', count: 16 },
  { value: 'WEBPACK', count: 20 },
  { value: 'Babel', count: 12 },
  { value: 'ES-6', count: 25 },
  { value: 'OOP', count: 15 },
  { value: 'HOOKS', count: 27 },
  { value: 'ReactJS', count: 17 },
  { value: 'Gulp4', count: 30 },
  { value: 'Java Script', count: 38 },
  { value: 'NodeJS', count: 28 },
  { value: 'Expressjs', count: 21 },
  { value: 'BabelJS', count: 12 },
  { value: 'Redux-thunk', count: 38 },
  { value: 'npm', count: 16 },
  { value: 'REDUX', count: 17 },
  { value: 'Java_Script', count: 38 },
  { value: 'Git', count: 15 },
  { value: 'HTML', count: 8 },
  { value: 'JEST', count: 15 },
];

const makeCoursesListLayout = (arr) => {
  if (arr.length === 0) {
    return null;
  } else {
    return arr.map((course) => <li key={course.id}>{course.title}</li>);
  }
};

const initialCoursesLayout = makeCoursesListLayout(initialCoursesList);

export const Courses = ({ match, history, courses, getCourses }) => {
  const [isCourses, setIsCourses] = useState(false);
  const [isTagCloud, setIsTagCloud] = useState(false);
  const historyPushDown = INTERESTS;
  const historyPushUp = SKILLS;
  let coursesLayout = makeCoursesListLayout(courses);
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
    <div className="container" onWheel={(e) => handleEvent(e.deltaY, match, history, historyPushDown, historyPushUp)}>
      <Header titleName="Courses" />
      <main>
        <section className="second-slide-first-picture img-container">
          <img className="main-img" src={photo} alt="ira" />
          <div className="cup-img-container">
            <img className="cup-img" src={cupImg} alt="cup" />
          </div>
          <div className="book-img-container">
            <img className="book-img" src={bookImg} alt="book" />
          </div>
          <div className="pen-img-container">
            <img className="pen-img" src={penImg} alt="pen" />
          </div>
        </section>
        <section className="second-slide-second-picture img-container">
          <img className="main-img" src={photo2} alt="ira" />
        </section>
        <div className="tag-cloud-click" onClick={() => showCourses()} />
        {isTagCloud && (
          <div className="tag-cloud-container">
            <TagCloud className="tag-cloud" tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
          </div>
        )}
        <div className="btn-expand-less">
          <ExpandLessButton onClick={() => handleEvent(0, match, history, historyPushDown, historyPushUp)} />
        </div>
        <div className="btn-expand-more">
          <ExpandMoreButton onClick={() => handleEvent(1.1, match, history, historyPushDown, historyPushUp)} />
        </div>
        {isCourses && <ul className="courses-list">{coursesLayout || initialCoursesLayout}</ul>}
      </main>
    </div>
  );
};

Courses.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  courses: arrayOf(object),
  getCourses: func.isRequired,
};
