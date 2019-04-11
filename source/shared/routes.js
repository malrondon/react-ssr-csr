import HomePage from './screens/home';
import ProfilePage from './screens/account/profile';
import NotFoundPage from './screens/not-found';
import BrowserUpgradePage from './screens/browser-upgrade';

const routes = [
  { path: '/', exact: true, component: HomePage },
  { path: '/conta/perfil', exact: true, component: ProfilePage },
  { path: '/atualizar-navegador', exact: true, component: BrowserUpgradePage },
  { component: NotFoundPage },
];

export default routes;
