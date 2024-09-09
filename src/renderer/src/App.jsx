import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Root from './pages/Root'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Bill from './pages/Bill'
import Truck from './pages/Truck'
import Vendor from './pages/Vendor'
import Company from './pages/Company'
import SplashScreen from './pages/Auth/SplashScreen'
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'

function App() {
  const [data, setData] = useState(0)

  // const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  // const handleIncrement = () => {
  //   setData((prev) => prev + 1)
  //   window.electron.ipcRenderer.send('smash')
  // }

  useEffect(() => {
    window.electron.ipcRenderer.send('react-loaded'); // Notify Electron that React is loaded
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="authorized" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="bill" element={<Bill />} />
          <Route path="truck" element={<Truck />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
