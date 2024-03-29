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
import Week3Main from './components/Home/Ritika/Week3';
import Week4Main from './components/Home/Ritika/Week4';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdityaWeek3 from './components/Home/Aditya/Week3';
import Week4Home from './components/Home/Ritika/Week4/Movies/Home';
import MovieDisplay from './components/Home/Ritika/Week4/Movies/SingleMovieDisplay/MovieDisplay';
import Week5Main from './components/Home/Ritika/Week5';

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
            <Route path='week2' element={<Week2 />} />
            <Route path='week3' element={<Week3Main />}></Route>
            <Route path='week4' element={<Week4Main />}>
              <Route path='home' element={<Week4Home />}></Route>
              <Route path='movie/:id' element={<MovieDisplay />}></Route>
            </Route>
            <Route path='week5' element={<Week5Main />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </AppWrapper>
  );
};

export default App;
