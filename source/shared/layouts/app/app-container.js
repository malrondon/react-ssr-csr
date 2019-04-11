import { connect } from 'react-redux';
import { Map } from 'immutable';

import App from './app-component';

const mapStateToProps = ({ stickyScroll, fetch, modalManager }) => ({
  header: stickyScroll.get('header') || Map(),
  fetch,
  modals: modalManager.get('modals') || [],
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
)(App);
