import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRoutes from './Routes/Routes';
import './Styles/Index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <MainRoutes />
  </Router>
);
