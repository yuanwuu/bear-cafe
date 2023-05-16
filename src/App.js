// ----------------- imports -------------------
import './App.css';
import { useState,useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';

//----------------- pages -------------------
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import AuthPage from './pages/AuthPage/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';

//----------------- Nav -------------------
import NavBar from './components/NavBar/NavBar';


function App() {
  const [user,setUser] = useState(getUser()) // so this useState is globally avail. 
  // console.log('current user', user)

  return (
    <main className="App">
      
     { // if-else statment for user authetication
      user ?(
        <>
        <NavBar user = {user} setUser={setUser}/>
        <Routes>
          <Route path='/orders/new' element={<NewOrderPage />} /> 
          <Route path='/orders' element={<OrderHistoryPage />} /> 
        </Routes>
        </>
      )
        : (
        <AuthPage setUser = {setUser}/>
        )
        
     }
    </main>
  );
}

export default App;
