import React, { useRef } from 'react';
import DrinkCustomization from '../../components/DrinkCustomization/DrinkCustomization';
import Feature from '../../components/Feature/Feature';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const authPageRef = useRef(null);

  const scrollToAuthPage = () => {
    authPageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.Home}>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>
          <Link to="/" onClick={scrollToAuthPage}>
            Login
          </Link>
        </li>
        <li>Menu</li>
      </ul>
      <Feature />
      <DrinkCustomization />
      <div ref={authPageRef}>
        {/* <AuthPage /> */}
      </div>
    </main>
  );
}