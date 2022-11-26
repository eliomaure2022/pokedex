
import { useState } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import './App.css'
import ProtectedRoutes from './components/protectedRoutes'

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
