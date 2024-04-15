// import logo from './logo.svg';
import './App.css'
import SignUp from './pages/SignUp'
import SignUp2 from './pages/SignUp2'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/SignUp2',
    element: <SignUp2 />,
    errorElement: <ErrorPage />
  },
])

// function App() {
//   return (
//     <div className='signUp'>
//       <RouterProvider router={router} />
//     </div>
//   )
// }
//
// export default App
