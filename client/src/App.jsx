import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Rollup } from 'vite'
import Home from './Pages/student/Home'
import CourcesList from './Pages/student/CourcesList'
import CourseDetails from './Pages/student/CourseDetails'
import MyEnrollments from './Pages/student/MyEnrollments'
import Player from './Pages/student/Player'

const App =() =>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CourcesList/>}/>
        <Route path='/course-list/:input' element={<CourcesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        
      </Routes>

    </div>
  )
}


export default App