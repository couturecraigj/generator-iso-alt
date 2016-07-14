import Router from 'routr';

import Home from 'app/components/pages/Home';
import About from 'app/components/pages/About';

const router = new Router({
  index: {
    path: '/',
    method: 'get',
    component: Home
  },
  about: {
    path: '/about/:days',
    method: 'get',
    component: About,
    action: 'AboutActions'
  }
});

export default router;
