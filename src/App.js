// import logo from './logo.svg';
// import './App.css'
// import SignUp from './pages/SignUp'
// import SignUp2 from './pages/SignUp2'
import { RouterProvider } from 'react-router-dom'
// import ErrorPage from './pages/ErrorPage'
import { router } from './components/Routes'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
