import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import MainNav from './components/MainNav';
import MyJobs from './Pages/MyJobs';
import Modal from './components/Modal';
import './App.css'
import 'animate.css';


function App() {
  return (

      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myJobs" element={<MyJobs />} />
        </Routes>
      </Router>
  )
}



export default App
