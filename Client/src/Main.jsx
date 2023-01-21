import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import MainRoutes from './Routes/Routes'
import { OnboardModal } from './Components/Index'
import { GlobalContextProvider } from './Context/Index'
import './Styles/Index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <GlobalContextProvider>
      <OnboardModal />
      <MainRoutes />
    </GlobalContextProvider>
  </Router>
)
