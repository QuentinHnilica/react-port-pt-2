import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/react-port-pt-2' element={<Home />}></Route>
          <Route exact path='/about' element={<AboutMe />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
