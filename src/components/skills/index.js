import { connect } from 'react-redux';

import { Skills } from './Skills';
import { getSkills } from 'redux/actions';

const mapStateToProps = (state) => ({
  skills: state.info.skills,
});

const mapDispatchToProps = {
  getSkills,
};
export default connect(mapStateToProps, mapDispatchToProps)(Skills);
