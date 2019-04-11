import { connect } from 'react-redux';
import { compose } from 'redux';
import { provideHooks } from 'redial';

import BrowserUpgradePage from './browser-upgrade-component';

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

export default composed(BrowserUpgradePage);
