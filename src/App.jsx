import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BugetTracker from './pages/BugetTracker'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App-container">
      <Router>
        <main className="Main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/tracker" element={<BugetTracker/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </Router>

      <Footer/>
    </div>
  )
}

export default App
