import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData';
import DashBoard from './components/dashboard/Dashboard';
import Header from './components/header/Header';

const App = () => (
  <>
        <h1>Muj Chytry dum ;-)</h1>
        <div className="container">
          <Header title="Novy hearder" />
          <DashBoard data={smartHomeData} />
        </div>
  </>
);

createRoot(
  document.querySelector('#app'),
).render(<App />);