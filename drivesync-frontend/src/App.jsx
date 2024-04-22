import './App.css';
import React from 'react';

import { Sidebar } from './components/Sidebar';

import AppRoutes from './routes';

export default function App() {
  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

        <AppRoutes />

      </div>
    </div>
  );
}

