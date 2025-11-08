import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ArtCurator from './components/ArtCurator'
import Branding from './components/Branding'
import FilmProduction from './components/FilmProduction'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/FilmProduction' element={<FilmProduction />} />
        <Route path='/Branding' element={<Branding />} />
        <Route path='/ArtCuration' element={<ArtCurator />} />
      </Routes>
    </Router>
  )
}

export default App
