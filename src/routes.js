import TabEligibilityChecker from './pages/TabEligibilityChecker';
import TabIndiaInfo from './pages/TabIndiaInfo';
import TabMoreInfo from './pages/TabMoreInfo';
import NoMatch from './pages/NoMatch';

export const routes = [
  {
    path: '/',
    key: 'TabEligibilityChecker',
    exact: true,
    component: TabEligibilityChecker,
  },
  {
    path: '/TabIndiaInfo',
    key: 'TabIndiaInfo',
    exact: true,
    component: TabIndiaInfo,
  },
  {
    path: '/TabMoreInfo',
    key: 'TabMoreInfo',
    exact: true,
    component: TabMoreInfo,
  },
  {
    key: '404',
    component: NoMatch,
  },
];
