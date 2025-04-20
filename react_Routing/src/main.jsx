import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Home/home.jsx'
import About from './About/about.jsx'
import Contact from './Contact/contact.jsx'
import User from './User/user.jsx'
import GitProfile, { GithubLoder } from './GitProfile/gitProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route loader = {GithubLoder} path='/GitProfile'  element={<GitProfile />}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
