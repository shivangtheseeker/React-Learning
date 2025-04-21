import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Context API Learning</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
   
  )
}

export default App
