

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Applications from './pages/Applications'
import RecuritorLogin from './components/RecuritorLogin'

function App() {
 

  return (
    <>
    <RecuritorLogin/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<Applyjob/>}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>
    </>
  )
}

export default App
