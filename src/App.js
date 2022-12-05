import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import Contact from './components/Contact'
<<<<<<< HEAD
// import Portfolio from './components/Portfolio'
=======
>>>>>>> 0128d5b3ed65b998bbabba2185e149d1533bca78

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
<<<<<<< HEAD
          <Route path="/about" element={<About />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
=======
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
>>>>>>> 0128d5b3ed65b998bbabba2185e149d1533bca78
        </Route>
      </Routes>
    </>
  )
}

export default App
