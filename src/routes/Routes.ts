import Sneaker from 'src/pages/Sneaker/Sneaker';
import Home from 'src/pages/Home/Home';
import About from 'src/pages/About/About';
import Contact from 'src/pages/Contact/Contact';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/sneaker', component: Sneaker },
  { path: 'about', component: About },
  { path: '/contact', component: Contact }
];

export { publicRoutes };
