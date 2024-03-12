import React from 'react';
import { AppWrapper } from './styles';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Keshav from './components/Home/Keshav';
import Ritika from './components/Home/Ritika';
import Shreyansh from './components/Home/Shreyansh';
import Aditya from './components/Home/Aditya';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/keshav" element={<Keshav/>}></Route>
          <Route path="/aditya" element={<Aditya/>}></Route>
          <Route path="/shreyansh" element={<Shreyansh/>}></Route>
          <Route path="/ritika" element={<Ritika/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
