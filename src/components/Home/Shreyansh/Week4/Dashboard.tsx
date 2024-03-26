import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { DashboardWrapper } from './DashboardStyle';
import RandomFacts from './components/RandomFacts/RandomFacts';
import Calculator from './components/Calculator/Calculator';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import GoalTracker from './components/GoalTracker/GoalTracker';

const features = [
  { path: 'RandomFacts', name: 'RandomFacts', component: <RandomFacts /> },
  { path: 'Calculator', name: 'Calculator', component: <Calculator /> },
  { path: 'CurrencyConverter', name: 'CurrencyConverter', component: <CurrencyConverter /> },
  { path: 'ExpenseTracker', name: 'ExpenseTracker', component: <ExpenseTracker /> },
  { path: 'GoalTracker', name: 'GoalTracker', component: <GoalTracker /> }
];

const Dashboard: React.FC = () => {
  return (
    <DashboardWrapper className='dashboardContainer'>
      <nav className='navbar'>
        <ul className='featureButton'>
          {features.map((feature, index) => (
            <li key={index}>
              <Link to={feature.path}>
                <button>{feature.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='featureContainer'>
        <Routes>
          {features.map((feature, index) => (
            <Route key={index} path={feature.path} element={feature.component} />
          ))}
        </Routes>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
