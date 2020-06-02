import { connect } from 'react-redux'

import { Home } from './home'
import { getSkills, getOtherSkills, getLanguages, getCourses } from '../../redux/actions'

const mapStateToProps = (state) => ({
  skills: state.info.skills,
  otherSkills: state.info.otherSkills,
  languages: state.info.languages,
  courses: state.info.courses,
  isFetching: state.info.isFetching,
})

const mapDispatchToProps = {
  getSkills,
  getOtherSkills,
  getLanguages,
  getCourses,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
