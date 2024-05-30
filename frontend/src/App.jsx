import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Welcome from './pages/Welcome/Welcome';
import AddRecipe from './pages/AddRecipe/AddRecipe';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import EditProfile from './pages/EditProfile/EditProfile';
import Recipe from './pages/Recipe/Recipe';
import Result from './pages/Result/Result';
import MyRecipes from './pages/MyRecipes/MyRecipes';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/editProfile" element={<ProtectedRoute roles={['USER', 'ADMIN']} child={<EditProfile />}></ProtectedRoute>} />
        <Route path="/myRecipes" element={<ProtectedRoute roles={['USER', 'ADMIN']} child={<MyRecipes />}></ProtectedRoute>} />
        <Route path="/addRecipe" element={<ProtectedRoute roles={['USER', 'ADMIN']} child={<AddRecipe />}></ProtectedRoute>} />
        <Route path="/addRecipe/:id" element={<ProtectedRoute roles={['USER', 'ADMIN']} child={<AddRecipe />}></ProtectedRoute>} />
        <Route path="/adminDashboard" element={<ProtectedRoute roles={['ADMIN']} child={<AdminDashboard />}></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;