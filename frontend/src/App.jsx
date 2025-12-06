import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/organisms/header'
import Home from './pages/home'
import Projects from './pages/projects'
import DesignSystem from './pages/design-system'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
    </BrowserRouter>
  )
}