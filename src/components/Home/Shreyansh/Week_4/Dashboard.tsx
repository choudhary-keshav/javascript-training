import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DashboardWrapper } from './DashboardStyle';
import Feature1 from './components/Feature1/Feature1';
import Feature2 from './components/Feature2/Feature2';
import Feature3 from './components/Feature3/Feature3';
import Feature4 from './components/Feature4/Feature4';
import Feature5 from './components/Feature5/Feature5';

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper>
      <div className='dashboard-container'>
        <nav className='navbar'>
          <ul className='feature-button'>
            <li>
              <Link to='feature1'>
                <button>Feature 1</button>
              </Link>
            </li>
            <li>
              <Link to='feature2'>
                <button>Feature 2</button>
              </Link>
            </li>
            <li>
              <Link to='feature3'>
                <button>Feature 3</button>
              </Link>
            </li>
            <li>
              <Link to='feature4'>
                <button>Feature 4</button>
              </Link>
            </li>
            <li>
              <Link to='feature5'>
                <button>Feature 5</button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='feature-container'>
          <Routes>
            <Route path='feature1' element={<Feature1 />} />
            <Route path='feature2' element={<Feature2 />} />
            <Route path='feature3' element={<Feature3 />} />
            <Route path='feature4' element={<Feature4 />} />
            <Route path='feature5' element={<Feature5 />} />
          </Routes>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
