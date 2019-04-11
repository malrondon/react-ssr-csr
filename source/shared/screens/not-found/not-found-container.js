import { connect } from 'react-redux';
import { compose } from 'redux';
import { provideHooks } from 'redial';

import NotFoundPage from './not-found-component';

const redial = {
  fetch: async ({ store: { dispatch, getState } }) => {},
};

const mapStateToProps = ({ routing }) => ({
  routing,
});

const composed = compose(
  provideHooks(redial),
  connect(
    mapStateToProps,
    null
  )
);

export default composed(NotFoundPage);
