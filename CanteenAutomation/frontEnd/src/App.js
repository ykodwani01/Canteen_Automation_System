//importing css
import './App.css';

//importing router
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

//importing pages
import SignIn from './signIn_signUp/sign_in.js';
import SignUp from './signIn_signUp/sign_up.js';
import RootLayout from './rootLayout.js';
import HomePage from './custom_compo/homepage.js';
import Feedback from './custom_compo/feedback.js';
import AboutUs from './custom_compo/aboutus.js';
import Contact from './custom_compo/contact.js';
import Account from './custom_compo/account.js';
import Error from './custom_compo/error.js';
import Canteens from './custom_compo/canteens.js';
import Menu from './custom_compo/menu.js';
import CownerHome from './custom_compo/cownerHome.js';
import PendingOrders from './custom_compo/pendingOrders';

//creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<SignIn/>}/>
      <Route path="/sign_up" element={<SignUp/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/home/feedback' element={<Feedback/>}/>
      <Route path='/home/aboutUs' element={<AboutUs/>}/>
      <Route path='/home/contact' element={<Contact/>}/>
      <Route path='/home/account' element={<Account/>}/>
      <Route path='/home/canteens' element={<Canteens/>}/>
      <Route path='/home/canteens/:id' element={<Menu/>}/>
      <Route path='/cownerHome/:id' element={<CownerHome/>}/>
      <Route path='/cownerHome/pendingOrders/:id' element={<PendingOrders/>}/>
      <Route path='*' element={<Error/>}/>
    </Route>
  )
)

function App() {
  return (
    // showing route
    <RouterProvider router={router}/>
  );
}

export default App;