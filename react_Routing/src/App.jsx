import { useState } from 'react'
import './App.css'
import Header from './Header/header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
