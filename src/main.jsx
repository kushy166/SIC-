import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Navbar from './components/navbar.jsx'
import BasicButtons from './components/material_ui.jsx'
import BasicRating from './components/rating.jsx'
import SvgIconsColor from './components/icons.jsx'
import BasicAlerts from './components/alert.jsx'
import FixedBottomNavigation from './components/positining.jsx'
import BasicBars from './components/charts.jsx'
import BasicDatePicker from './components/datepicker.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />

    <BasicButtons />

    <BasicRating />

    <SvgIconsColor />

   <BasicAlerts/>
    
  <FixedBottomNavigation/>

  <BasicBars />
  
 <BasicDatePicker />
  
   

  </StrictMode>,
)
