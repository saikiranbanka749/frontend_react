import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormSubmit from './FormSubmit'
import DisplayTable from './DisplayTable'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormSubmit/>}/>
            <Route path='/table' element={<DisplayTable/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router