import React, { Component } from 'react'
import Navbar from './componts/Navbar'
import News from './componts/News'
import {
 
  BrowserRouter, Route, Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        
        {/* <News pageSize={6} country ="us" category = "general"/> */}

         <BrowserRouter>
         <Navbar/>
        <Routes>
      
        <Route exact  path ="/general"element={<News key='general' pageSize={6} country ="us" category = "general"/>}/>
        <Route exact  path ="/businessen"element={<News key='businessen' pageSize={6} country ="in" category ="businessen"/>}></Route>
        <Route exact  path ="/tertainment"element={<News key='tertainment' pageSize={6} country ="in" category ="tertainment"/>}></Route>
        <Route exact  path ="/health"element={<News key='health' pageSize={6} country ="in" category ="health"/>}></Route>
        <Route exact  path ="/sciences"element={<News key='sciences' pageSize={6} country ="in" category ="sciences"/>}></Route>
        <Route exact  path ="/ports"element={<News key='ports' pageSize={6} country ="in" category ="ports"/>}></Route>
        <Route exact  path ="/technology"element={<News key='technology' pageSize={6} country ="in" category ="technology"/>}></Route>

         </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
