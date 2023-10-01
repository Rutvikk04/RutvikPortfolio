import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import React from 'react';
const Dashboard=React.lazy(()=>import('./Components/Dashboard'))
const Project=React.lazy(()=>import('./Components/Project'))
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<React.Suspense fallback="loading...."><Dashboard/></React.Suspense>}/>
      <Route path='/project' element={<React.Suspense fallback="loading...."><Project/></React.Suspense>}/>    
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
