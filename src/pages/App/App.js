import styles from './App.module.css';

// ------------------------------------ IMPORT ----------------------------------
import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';

// ------------------------------------ PAGE ----------------------------------
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Home from '../Home/Home';

export default function App() {
  const [user, setUser] = useState(getUser());
  const authPageRef = useRef(null);

  useEffect(() => {
    if (!user) {
      scrollToAuthPage();
    }
  }, [user]);

  const scrollToAuthPage = () => {
    authPageRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.App}>
      <Home scrollToAuthPage={scrollToAuthPage} />
      {user ? (
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <div ref={authPageRef}>
          <AuthPage setUser={setUser} />
        </div>
      )}
    </main>
  );
}