import {
  FETCH_INFO_BEGIN,
  FETCH_SKILLS_SUCCESS,
  FETCH_OTHER_SKILLS_SUCCESS,
  FETCH_LANGUAGES_SUCCESS,
  FETCH_COURSES_SUCCESS,
} from './actionTypes';

const initialState = {
  skills: [],
  otherSkills: [],
  languages: [],
  courses: [],
  isFetching: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_INFO_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skills: [...state.skills, ...payload.skills],
        isFetching: false,
      };
    case FETCH_OTHER_SKILLS_SUCCESS:
      return {
        ...state,
        otherSkills: [...state.otherSkills, ...payload.skills],
        isFetching: false,
      };
    case FETCH_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: [...state.languages, ...payload.languages],
        isFetching: false,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, ...payload.courses],
        isFetching: false,
      };
    default:
      return state;
  }
};
