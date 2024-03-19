import React from 'react';
import { AppWrapper } from './styles';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Keshav from './components/Home/Keshav';
import Ritika from './components/Home/Ritika';
import Shreyansh from './components/Home/Shreyansh';
import Aditya from './components/Home/Aditya';
import NotFound from './components/NotFound';
import Week1 from './components/Home/Keshav/Week1';
import Week3 from './components/Home/Keshav/Week3';
import Week4 from './components/Home/Keshav/Week4';
import Week2 from './components/Home/Ritika/Week2';
import RWeek3  from './components/Home/Ritika/Week3';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='keshav' element={<Keshav />}>
            <Route path='week1&2' element={<Week1 />}></Route>
            <Route path='week3' element={<Week3 />}></Route>
            <Route path='week4' element={<Week4 />}>
              <Route path=':pageId' element={<Week4 />}></Route>
            </Route>
          </Route>
          <Route path='aditya' element={<Aditya />}></Route>
          <Route path='shreyansh' element={<Shreyansh />}></Route>
          <Route path='ritika' element={<Ritika />}>
            <Route path='week2' element={<Week2 />}></Route>
            <Route path='week3' element={<RWeek3 />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer/>
    </AppWrapper>
  );
};

export default App;
