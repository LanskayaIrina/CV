import React, { useEffect } from 'react'
import { arrayOf, func, bool, string, shape, number } from 'prop-types'

import './styles.scss'

export const Home = ({ skills,
  otherSkills,
  languages,
  courses,
  isFetching,
  getSkills,
  getOtherSkills,
  getLanguages,
  getCourses,
  children }) => {

  useEffect(() => {
    getSkills()
    getOtherSkills()
    getLanguages()
    getCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="content">{children}</div>
  )
}

Home.propTypes = {
  skills: arrayOf(shape({
    id: number.isRequired,
    skill: string.isRequired
  })),
  otherSkills: arrayOf(shape({
    id: number.isRequired,
    skill: string.isRequired
  })).isRequired,
  languages: arrayOf(string).isRequired,
  courses: arrayOf(shape({
    id: number.isRequired,
    course: string.isRequired
  })).isRequired,
  isFetching: bool.isRequired,
  getSkills: func.isRequired,
  getOtherSkills: func.isRequired,
  getLanguages: func.isRequired,
  getCourses: func.isRequired,
}
