import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BugetTracker from './pages/BugetTracker'

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
    </div>
  )
}

export default App
