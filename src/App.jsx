
import Header from './assets/Components/Header'
import Login from './assets/Components/Login'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'


function App() {

  const { isAuthenticated } = useAuth0();
  return (
    <>
    {
        isAuthenticated ? (<Header />):(<Login />)
      }
    </>
  )
}

export default App
