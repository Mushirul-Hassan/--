import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Dashboard from './Dashboard.jsx'
import { BrowserRouter } from "react-router-dom";
import Dashboard from './Dashboard.jsx';
// import Dashboard1 from './Dashboard1.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    {/* <App/> */}
    <Dashboard/>
  </StrictMode>
  </BrowserRouter>
)
