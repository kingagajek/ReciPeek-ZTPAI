import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Welcome from './pages/Welcome/Welcome';
import AddRecipe from './pages/AddRecipe/AddRecipe'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import EditProfile from './pages/EditProfile/EditProfile';
import Recipe from './pages/Recipe/Recipe';
import Result from './pages/Result/Result';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
