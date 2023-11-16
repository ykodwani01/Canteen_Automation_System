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
import Error from './custom_compo/error.js';
import Canteens from './custom_compo/canteens.js';
import Menu from './custom_compo/menu.js';
import CownerHome from './custom_compo/cownerHome.js';
import PendingOrders from './custom_compo/pendingOrders';
import AllOrders from './custom_compo/allOrders';
import FeedbackCanteen from './custom_compo/feedbackCanteen.js';

//creating routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='https://canteenautomation-cc940.web.app/' element={<RootLayout/>}>
      <Route index element={<SignIn/>}/>
      <Route path="https://canteenautomation-cc940.web.app/sign_up" element={<SignUp/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home' element={<HomePage/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home/feedback' element={<Feedback/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home/aboutUs' element={<AboutUs/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home/contact' element={<Contact/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home/canteens' element={<Canteens/>}/>
      <Route path='https://canteenautomation-cc940.web.app/home/canteens/:id' element={<Menu/>}/>
      <Route path='https://dacanteen.pythonanywhere.com/cownerHome/:id' element={<CownerHome/>}/>
      <Route path='https://dacanteen.pythonanywhere.com/cownerHome/pendingOrders/:id' element={<PendingOrders/>}/>
      <Route path='https://dacanteen.pythonanywhere.com/cownerHome/allOrders/:id' element={<AllOrders/>}/>
      <Route path='https://dacanteen.pythonanywhere.com/cownerHome/feedbackCanteen/:id' element={<FeedbackCanteen/>}/>
      <Route path='https://dacanteen.pythonanywhere.com/*' element={<Error/>}/>
      <Route path='https://canteenautomation-cc940.web.app/*' element={<Error/>}/>
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