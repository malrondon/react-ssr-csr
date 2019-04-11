import { compose } from 'redux';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';

import HomePage from './home-component';

const redial = {
  fetch: async ({ store: { dispatch, getState } }) => {},
};

const mapStateToProps = ({ routing }) => ({
  routing,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
  };
};

const composed = compose(
  provideHooks(redial),
  connect(
    mapStateToProps,
    null,
    mergeProps
  )
);

export default composed(HomePage);
