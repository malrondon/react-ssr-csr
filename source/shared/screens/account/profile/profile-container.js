import { connect } from 'react-redux';

import ProfilePage from './profile-component';

const mapStateToProps = ({ routing }) => ({
  routing,
});

export default connect(mapStateToProps)(ProfilePage);
