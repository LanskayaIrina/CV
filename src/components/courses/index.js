import { connect } from 'react-redux';

import { Courses } from './Courses';

const mapStateToProps = (state) => ({
  courses: state.info.courses,
});

export default connect(mapStateToProps, null)(Courses);
