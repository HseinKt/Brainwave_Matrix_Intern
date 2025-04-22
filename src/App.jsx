import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BugetTracker from './pages/BugetTracker'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tracker" element={<BugetTracker/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
