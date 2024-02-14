
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Page/Home'
import "leaflet/dist/leaflet.css";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route path='/' Component={Home} />
        </Route>
      </Routes>
    </div>
  )
}