import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import useWindowSize from '../hooks/useWindow';
import Ecosystem from './pages/Ecosystem';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Tokenomics from './pages/Tokenomics';
import Roadmap from './pages/Roadmap';
import Deck from './pages/Deck';

const App = () => {
  const location = useLocation()

  return (
    <>
      <Nav />
      <div className="font-poppins">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/ecosystem" element={<Ecosystem />}></Route>
            <Route path="/deck" element={<Deck />}></Route>
            <Route path="/tokenomics" element={<Tokenomics />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>

          </Routes>
        </AnimatePresence>

      </div>

    </>

  )
}

export default App