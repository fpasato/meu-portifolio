import './App.css'
import { Home } from './pages/home'
import { SosProject } from './pages/sos'
import { WavesProject } from './pages/waves'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SosProject />} />
        <Route path="/waves" element={<WavesProject />} />
      </Routes>
    </div>
  )
}