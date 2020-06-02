import {
  FETCH_INFO_BEGIN,
  FETCH_SKILLS_SUCCESS,
  FETCH_OTHER_SKILLS_SUCCESS,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_COURSES_SUCCESS
} from './actionTypes'
import { HttpService } from '../services/HttpService'

export const fetchSkillsBegin = () => ({
  type: FETCH_INFO_BEGIN,
})

export const fetchSkillsSuccess = (skills) => ({
  type: FETCH_SKILLS_SUCCESS,
  payload: { skills },
})

export const fetchOtherSkillsSuccess = (skills) => ({
  type: FETCH_OTHER_SKILLS_SUCCESS,
  payload: { skills },
})

export const fetchLanguagesSuccess = (languages) => ({
  type: FETCH_LANGUAGES_SUCCESS,
  payload: { languages },
})

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: { courses },
})

export const getSkills = () => {

  return (dispatch) => {
    dispatch(fetchSkillsBegin())

    return HttpService.get('skills').then((skills) => dispatch(fetchSkillsSuccess(skills)))
  }
}

export const getOtherSkills = () => {

  return (dispatch) => {
    dispatch(fetchSkillsBegin())

    return HttpService.get('other_skills').then((skills) => dispatch(fetchOtherSkillsSuccess(skills)))
  }
}

export const getLanguages = () => {

  return (dispatch) => {
    dispatch(fetchSkillsBegin())

    return HttpService.get('languages').then((languages) => dispatch(fetchLanguagesSuccess(languages)))
  }
}

export const getCourses = () => {

  return (dispatch) => {
    dispatch(fetchSkillsBegin())

    return HttpService.get('courses').then((courses) => dispatch(fetchCoursesSuccess(courses)))
  }
}
