import { connect } from 'react-redux';

import { Courses } from './Courses';
import { getCourses } from 'redux/actions';

const mapStateToProps = (state) => ({
  courses: state.info.courses,
});

// const mapDispatchToProps = (dispatch) => ({
//   getSkills:  () => {
//     dispatch(getSkills());
//   }
// })
const mapDispatchToProps = {
  getCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
