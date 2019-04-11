import { connect } from 'react-redux';

import Header from './header-component';

const mapStateToProps = ({ routing }) => ({
  routing
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(Header);
