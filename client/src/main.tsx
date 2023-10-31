import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from "./templates/home/Homepage.tsx"
import About from "./templates/About"
import Contact from "./templates/Contact"
import Products from "./templates/Products"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/products' Component={Products} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

