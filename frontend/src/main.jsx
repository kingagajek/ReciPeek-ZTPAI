import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import Result from './pages/Result/Result.jsx'
import Recipe from './pages/Recipe/Recipe.jsx'
import EditProfile from './pages/EditProfile/EditProfile.jsx'
import AddRecipe from './pages/AddRecipe/AddRecipe.jsx'
import Welcome from './pages/Welcome/Welcome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App />}>
          <Route path = "/" element = {<Home />} />
          <Route path = "/result" element = {<Result />} />
          <Route path = "/recipe" element = {<Recipe />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path = "/editProfile" element = {<EditProfile />} />
          <Route path = "/addRecipe" element = {<AddRecipe />} />
          <Route path = "/welcome" element = {<Welcome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
