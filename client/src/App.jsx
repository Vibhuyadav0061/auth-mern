
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Headers from './components/Headers'
import Home from './pages/Home'
import About from './pages/About'
import Photos from './pages/Photos'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
