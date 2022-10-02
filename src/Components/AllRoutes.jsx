import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Comunity from '../Routes/Comunity'
import Countries from '../Routes/Countries'
import Fitness from '../Routes/Fitness'
import Foods from '../Routes/Foods'
import Recipes from '../Routes/Recipes'

const AllRoutes = () => {
  return (
    <Routes>
        
            <Route path="/foods" element={<Foods />}></Route>
            <Route path="/recipes" element={<Recipes />}></Route>
            <Route path="/fitness" element={<Fitness />}></Route>
            <Route path="/comunity" element={<Comunity />}></Route>
            <Route path="/countries" element={<Countries />}></Route>
    </Routes>
  )
}

export default AllRoutes
