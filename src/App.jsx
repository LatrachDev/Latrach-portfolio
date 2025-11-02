import './App.css'
import RoutesList from './Routes/Routes'
import SmoothFollower from './components/SmoothFollower'

function App() {

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <SmoothFollower />
      <RoutesList />
    </div>
  )
}

export default App
