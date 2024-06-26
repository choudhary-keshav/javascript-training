import React from 'react';
import { AppWrapper } from './styles';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Keshav from './components/Home/Keshav';
import Shreyansh from './components/Home/Shreyansh';
import Aditya from './components/Home/Aditya';
import NotFound from './components/NotFound';
import KeshavWeek1 from './components/Home/Keshav/Week1';
import KeshavWeek3 from './components/Home/Keshav/Week3';
import KeshavWeek4 from './components/Home/Keshav/Week4';
import KeshavWeek5 from './components/Home/Keshav/Week5';
import ShreyanshWeek4 from './components/Home/Shreyansh/Week4';
import ShreyanshWeek5 from './components/Home/Shreyansh/Week5';
import Week2 from './components/Home/Ritika/Week2';
import Week3Main from './components/Home/Ritika/Week3';
import Week4Main from './components/Home/Ritika/Week4';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdityaWeek4Week1 from './components/Home/Aditya/Week4/pages/Week1';
import AdityaWeek4Week3 from './components/Home/Aditya/Week4/pages/Week3';
import AdityaWeek3 from './components/Home/Aditya/Week3';
import AdityaWeek4 from './components/Home/Aditya/Week4';
import AdityaWeek5 from './components/Home/Aditya/Week5';
import Week4Home from './components/Home/Ritika/Week4/Movies/Home';
import MovieDisplay from './components/Home/Ritika/Week4/Movies/SingleMovieDisplay/MovieDisplay';
import Week5Main from './components/Home/Ritika/Week5';
import PrivateRoutes from './components/Home/Ritika/ProtectedRoutes/ProtectedRoutes';
import Login from './components/Home/Ritika/Login/Login';

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
            <Route path='week4/*' element={<ShreyanshWeek4 />} />
            <Route path='week5/*' element={<ShreyanshWeek5 />} />
          </Route>
          <Route path='/aditya' element={<Aditya />}>
            <Route path='/aditya/week3' element={<AdityaWeek3 />} />
            <Route path='/aditya/week4/*' element={<AdityaWeek4 />}>
              <Route path='week1&2' element={<AdityaWeek4Week1 />} />
              <Route path='week3' element={<AdityaWeek4Week3 />} />
            </Route>
            <Route path='/aditya/week5' element={<AdityaWeek5 />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='ritika' element={<PrivateRoutes />}>
            <Route path='week2' element={<Week2 />} />
            <Route path='week3' element={<Week3Main />} />
            <Route path='week4' element={<Week4Main />}>
              <Route path='home' element={<Week4Home />} />
              <Route path='movie/:id' element={<MovieDisplay />} />
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
