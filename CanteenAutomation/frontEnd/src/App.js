import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import SignIn from './sign_in.js';
import SignUp from './sign_up.js';
import RootLayout from './rootLayout.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<SignIn/>}/>
      <Route path="/sign_up" element={<SignUp/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;