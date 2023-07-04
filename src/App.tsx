import { useState } from 'react'
import './App.scss'
import MainPage from './assets/pages/MainPage'
import {Navigation} from './assets/components/Navigation'


function App() {

  return (
    <>
    <Navigation></Navigation>
    <MainPage />
    </>
  )
}

export default App
