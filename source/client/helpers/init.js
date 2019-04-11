import { pageLoad } from '../../shared/store/page/page-actions';

export const listenPageLoad = store => {
  window.addEventListener('DOMContentLoaded', () => store.dispatch(pageLoad()));
};
