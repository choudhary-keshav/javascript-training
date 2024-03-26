import React from 'react';
import { AppWrapper } from './styles';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Keshav from './components/Home/Keshav';
import Ritika from './components/Home/Ritika';
import Shreyansh from './components/Home/Shreyansh';
import Aditya from './components/Home/Aditya';
import NotFound from './components/NotFound';
import KeshavWeek1 from './components/Home/Keshav/Week1';
import KeshavWeek3 from './components/Home/Keshav/Week3';
import KeshavWeek4 from './components/Home/Keshav/Week4';
import KeshavWeek5 from './components/Home/Keshav/Week5';
import ShreyanshWeek4 from './components/Home/Shreyansh/Week4';
import Week2 from './components/Home/Ritika/Week2';
import RWeek3 from './components/Home/Ritika/Week3';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdityaWeek3 from './components/Home/Aditya/Week3';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='keshav' element={<Keshav />}>
            <Route path='week1&2' element={<KeshavWeek1 />} />
            <Route path='week3' element={<KeshavWeek3 />} />
            <Route path='week4' element={<KeshavWeek4 />}>
              <Route path=':pageId' element={<KeshavWeek4 />} />
            </Route>
            <Route path='week5' element={<KeshavWeek5 />} />
          </Route>
          <Route path='shreyansh' element={<Shreyansh />}>
            <Route path='week4/*' element={<ShreyanshWeek4 />}></Route>
          </Route>
          <Route path='/aditya' element={<Aditya />}>
            <Route path='/aditya/week3' element={<AdityaWeek3 />}></Route>
          </Route>
          <Route path='ritika' element={<Ritika />}>
            <Route path='week2' element={<Week2 />}></Route>
            <Route path='week3' element={<RWeek3 />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </AppWrapper>
  );
};

export default App;
