import Sneaker from 'src/pages/Sneaker/Sneaker';
import Home from 'src/pages/Home/Home';
import About from 'src/pages/About/About';
import Contact from 'src/pages/Contact/Contact';
import Detail from 'src/pages/Detail/Detail';
import Account from 'src/pages/Account/Account';
import Login from 'src/pages/Login/Login';
import Cart from 'src/pages/Cart/Cart';
import Register from 'src/pages/Register/Register';
import AddSneaker from 'src/pages/AddSneaker/AddSneaker';
import Checkout from 'src/pages/Checkout/Checkout';
import Bill from 'src/pages/Bill/Bill';
import BillDetails from 'src/pages/BillDetails/BillDetails';
import User from 'src/pages/User/User';
import UserDetails from 'src/pages/UserDetails/UserDetails';
import UserAdd from 'src/pages/UserAdd/UserAdd';

const publicRoutes = [
  { path: '/', component: Home },
  { path: 'login', component: Login },
  { path: '/sneaker', component: Sneaker },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/detail', component: Detail },
  { path: '/account', component: Account },
  { path: '/cart', component: Cart },
  { path: '/register', component: Register },
  { path: '/checkout', component: Checkout }
];

const adminRoutes = [
  { path: '/sneaker/add', component: AddSneaker },
  { path: '/bill', component: Bill },
  { path: '/bill/details', component: BillDetails },
  { path: '/user', component: User },
  { path: '/user/details', component: UserDetails },
  { path: '/user/add', component: UserAdd }
];

export { publicRoutes, adminRoutes };
