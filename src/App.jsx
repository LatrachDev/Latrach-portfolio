import './App.css'
import RoutesList from './Routes/Routes'
import SmoothFollower from './components/SmoothFollower'
import ScrollTop from './components/ScrollTop'

function App() {

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <ScrollTop />
      <SmoothFollower />
      <RoutesList />
    </div>
  )
}

export default App
