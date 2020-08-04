import { connect } from 'react-redux';

import { Skills } from './Skills';

const mapStateToProps = (state) => ({
  skills: state.info.skills,
});

export default connect(mapStateToProps, null)(Skills);
