import React, { useState } from 'react';
import { TagCloud } from 'react-tagcloud';
import { object, arrayOf } from 'prop-types';

import { Header } from 'components/header/Header';
import { clickToContinue } from 'services/clickToContinue';
import { INTERESTS } from 'constants/pathNames';
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

export const Courses = ({ match, history, courses }) => {
  const [isCourses, setIsCourses] = useState(false);
  const historyPush = INTERESTS;

  let coursesLayout = makeCoursesListLayout(courses);

  const showCourses = () => {
    setIsCourses(true);
  };

  const hideCourses = () => {
    setIsCourses(false);
  };

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
    <div className="container">
      <Header />
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
        <div className="tag-cloud-container">
          <TagCloud className="tag-cloud" tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
        </div>
        <button className="btn-continue" onClick={() => clickToContinue(history, historyPush)}>
          Continue
        </button>
        {isCourses && (
          <div className="blurred-background" onClick={hideCourses}>
            <ul className="courses-list">{coursesLayout || initialCoursesLayout}</ul>
          </div>
        )}
      </main>
    </div>
  );
};

Courses.propTypes = {
  match: object.isRequired,
  history: object.isRequired,
  courses: arrayOf(object),
};
