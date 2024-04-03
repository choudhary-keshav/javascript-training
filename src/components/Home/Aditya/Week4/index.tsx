import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Week1 from './pages/Week1';
import Week3 from './pages/Week3';

const Week4: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='week1&2' element={<Week1 />} />
        <Route path='week3' element={<Week3 />} />
      </Route>
    </Routes>
  );
};

export default Week4;
