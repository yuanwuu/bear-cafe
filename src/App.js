// imports
import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';

//Nav
import NavBar from './components/NavBar/NavBar';


function App() {
  const [user,setUser] = useState({}) // so this useState is globally avail. 
  

  return (
    <main className="App">
      
     { // if-else statment for user authetication
      user ?(
        <>
        <NavBar />
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} /> 
          <Route path='/orders' element={<OrderHistoryPage />} /> 
        </Routes>
        </>
      )
        : (
        <AuthPage />
        )
        
     }
    </main>
  );
}

export default App;
