import Sneaker from 'src/pages/Sneaker/Sneaker';
import Home from 'src/pages/Home/Home';
import About from 'src/pages/About/About';
import Contact from 'src/pages/Contact/Contact';
import Detail from 'src/pages/Detail/Detail';
import Account from 'src/pages/Account/Account';
import Login from 'src/pages/Login/Login';

const publicRoutes = [
  { path: '/', component: Home },
  { path: 'login', component: Login },
  { path: '/sneaker', component: Sneaker },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/detail', component: Detail },
  { path: '/account', component: Account },
];

export { publicRoutes };
