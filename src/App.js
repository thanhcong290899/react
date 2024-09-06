import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { Container, Navbar } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Nav';
import ContentForm from './components/AddContent';
import ViewContent from './components/ViewContent';
import UpdateContent from './components/EditContent';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} /> {/* Route mặc định */}
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<ContentForm />} />
        <Route path='/view' element={<ViewContent />} />
        <Route path="/update/:id" element={<UpdateContent />} /> {/* Thêm route update */}
      </Routes>

    </Router>
  );
}

export default App;
